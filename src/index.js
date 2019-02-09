const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

/**
 * @api {get} / Request say hello
 * @apiName hello
 * @apiGroup hello_world
 * @apiVersion 0.2.0
 *
 * @apiParam {String} firstName included with response hello message
 * @apiParam {String} lastName included with response hello message
 *
 * @apiSuccessExample Example data on success
 * hello {lastName} {firstName}
 *
 * @apiError 400 invalid request param
 *
 * @apiSampleRequest http://localhost:3000
 */
app.use(async (ctx) => {
  ctx.body = `hello ${ctx.request.body.lastName} ${ctx.request.body.firstName}`;
});

app.listen(process.argv[2]);
