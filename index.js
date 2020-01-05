import Koa        from 'koa';
import logger     from 'koa-logger';
import bodyParser from 'koa-bodyparser';
import cors       from '@koa/cors';
import mongoose   from 'mongoose';
import router     from './src/routes';
import config     from './src/config';

const app = new Koa();

require('koa-validate')(app);

mongoose.connect(config.mongoURL, (error) => {
  if (error) throw error;
  console.log('Mongod connected!');

  app.use(logger());
  app.use(bodyParser());
  app.use(cors());
  app.use(router.routes());
  app.use(router.allowedMethods());

  app.listen(config.port, () => {
    console.log(`Server is running on port: ${config.port}`);
  });
});

export default app;
