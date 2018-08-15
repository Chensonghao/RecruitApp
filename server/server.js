const http = require('http');
const https = require('https');
const Koa = require('koa');
const Router = require('koa-router');
const app = new Koa();
const router = new Router();
const session = require('koa-session');
const sessionStore = require('./lib/sessionStore')();

app.keys = ['chensonghao939'];
app.use(
	session(
		{
			store: sessionStore,
			key: 'RECRUITSESSIONID' /** (string) cookie key (default is koa:sess) */,
			maxAge: 1000 * 60 * 20,
			overwrite: true /** (boolean) can overwrite or not (default true) */,
			httpOnly: true /** (boolean) httpOnly or not (default true) */,
			signed: true /** (boolean) signed or not (default true) */,
			rolling: true /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */,
			renew: true /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
		},
		app
	)
);
app.use(router.routes()).use(router.allowedMethods());

router
	.get('/', (ctx, next) => {
		let user = ctx.session.user;
		ctx.session.view = 'index';
		ctx.body = 'Hello World!!';
	})
	.post('/users', (ctx, next) => {
		// ...
	})
	.put('/users/:id', (ctx, next) => {
		// ...
	})
	.del('/users/:id', (ctx, next) => {
		// ...
	})
	.all('/users/:id', (ctx, next) => {
		// ...
	});
http.createServer(app.callback()).listen(3100);
//https.createServer(app.callback()).listen(3200);
