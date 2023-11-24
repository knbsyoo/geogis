const Koa = require('koa');
const app = new Koa();

const router = require('./route/google');


// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next();
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
});

// routes
app.use(router.routes());

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});