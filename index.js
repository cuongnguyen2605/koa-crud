import Koa        from 'koa';
import logger     from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors       from '@koa/cors';
import mongoose   from 'mongoose';
import router     from './router';
import config     from './config';

const app = new Koa();

require('koa-validate')(app);

app.use(logger())
    .use(bodyParser())
    .use(cors())
    .use(router.routes())
    .use(router.allowedMethods());

mongoose.connect(config.mongoURL, (error) => {
    if (error) {
        throw error;
    }
});

const server = app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
});

export default server;
