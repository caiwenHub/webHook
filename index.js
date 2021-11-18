const Koa = require('koa')
const router = require('koa-router')()
const bodyParser = require('koa-bodyparser');



const app = new Koa()


app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
  ctx.set('Access-Control-Allow-Origin', '*');
  ctx.set('Access-Control-Allow-Headers', '*');
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    await next();
});

router.get('/', async (ctx, next) => {
  ctx.body = 'index page';
  await next()
})

router.post('/payload', async (ctx, next) => {
  const body = ctx.request.body;
  console.log(3333, ctx.request.body)
  ctx.body = 'payload success'
  await next()
})

app.use(bodyParser());
app.use(router.routes());

app.listen(4567)
console.log('http://127.0.0.1:4567')