//数据库连接配置
const config = {
	user: 'postgres',
	host: '47.97.120.137',
	database: 'recruit',
	password: '',
	port: '5432',
	max: 20, // 连接池最大连接数
	idleTimeoutMillis: 3000 // 连接最大空闲时间 3s
};
const { Pool } = require('pg');
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
