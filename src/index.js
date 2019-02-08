const Koa = require('koa');
const app = new Koa();

/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
app.use(async (ctx) => {
	ctx.body = 'hello world';	
});

app.listen(process.argv[2]);
