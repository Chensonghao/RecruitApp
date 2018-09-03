const excuteSql = require('./query');

const Store = opts => {
	opts = opts || {};
	const tableName = opts.tableName || 'session';
	const getExpireTime = maxAge => {
		const oneDay = 1000 * 60 * 60 * 24;
		const now = Date.now();
		return ((typeof maxAge === 'number' ? maxAge : oneDay) + now) / 1000;
	};
	const currentTimestamp = () => {
		return Math.ceil(Date.now() / 1000);
	};
	const query = async (sql, params, fn) => {
		const res = await excuteSql(sql, params);
		return res && res.rows[0] ? res.rows[0] : false;
	};
	return {
		async get(sid, maxAge, { rolling }) {
			const sql = `SELECT sess FROM ${tableName} WHERE sid = $1 AND expire >= to_timestamp($2)`;
			const data = await query(sql, [sid, currentTimestamp()]);
			return typeof data.sess === 'string' ? JSON.parse(data.sess) : data.sess;
		},
		async set(sid, sess, maxAge, { rolling, changed }) {
			const expireTime = getExpireTime(maxAge);
			const sqlUpdate = `UPDATE ${tableName} SET sess = $1, expire = to_timestamp($2) WHERE sid = $3 RETURNING sid`;
			const sidRow = await query(sqlUpdate, [sess, expireTime, sid]);
			if (!sidRow) {
				const sqlDelete = `DELETE FROM ${tableName} WHERE expire < to_timestamp($1)`;
				const sqlInsert = `INSERT INTO ${tableName} (sess, expire, sid)
				SELECT $1, to_timestamp($2), $3 WHERE NOT EXISTS (SELECT 1 FROM ${tableName} WHERE sid = $4)`;
				await query(sqlInsert, [sess, expireTime, sid, sid]);
				await query(sqlDelete, [currentTimestamp()]);
			}
		},
		async destroy(sid) {
			await query(`DELETE FROM ${tableName} WHERE sid = $1`, [sid]);
		}
	};
};
module.exports = Store;
