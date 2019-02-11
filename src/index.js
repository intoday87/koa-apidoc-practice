const Koa = require('koa');
const app = new Koa();
const bodyparser = require('koa-bodyparser');

app.use(bodyparser());

/**
 * apiDefine에 apiGroup을 공유해서 쓸려고하면 api 명세가 깨지고 버전 히스토리도 동작이 안된다
 * apiParam 수준만 되는 듯
 */

/**
 * @apiDefine helloWorldGroup 파라미터 공용 도큐먼트 주석
 * @apiParam {String} firstName included with response hello message
 * @apiParam {String} lastName included with response hello message
 */

/**
 * @api {get} / Request say hello
 * @apiUse helloWorldGroup
 * @apiGroup hello_world
 * @apiName hello
 * @apiVersion 0.2.0
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
