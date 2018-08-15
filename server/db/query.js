const { Pool } = require('pg');
const config = require('./connect');
const pool = new Pool(config);
const log = require('cshlog');

module.exports = async (sqlText, values) => {
	try {
		const client = await pool.connect();
		const res = await client.query(sqlText, values || []);
		client.release();
		return res;
	} catch (e) {
		log.error(JSON.stringify({ msg: e.message, sql: sqlText }));
		return false;
	}
};
