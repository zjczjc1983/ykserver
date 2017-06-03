const Koa = require('koa');
const router = require('koa-router')();
const cors = require('koa2-cors');
const app = new Koa();

app.use(cors());

router.get('/api/test', async (ctx, next) => {
    ctx.response.body = 'ok'
})

router.get('/api/event', async (ctx, next) => {
    ctx.response.body = {
        id: 1
    }
})

app.use(router.routes());

app.listen(80);
console.log('ykserver started at port 80...');