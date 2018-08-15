//postgresql数据库配置
module.exports = {
	user: 'postgres',
	host: '47.97.120.137',
	database: 'recruit',
	password: '',
	port: '5432',
	max: 20, // 连接池最大连接数
	idleTimeoutMillis: 3000 // 连接最大空闲时间 3s
};
