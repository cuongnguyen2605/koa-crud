import Router from 'koa-router';
import config from '../config';

// Middleware
import validate from '../http/middleware/validate.middleware';

// Controller
import { postController } from '../http/controller';

// Router
const router = new Router();

// Post api
const post = 'post';

// Post router
router
  .prefix(`/${config.baseApi}/${post}`)
  .get('/', postController.findAll)
  .get('/:id', postController.findOne)
  .post('/', validate, postController.create)
  .put('/:id', validate, postController.edit)
  .delete('/:id', postController.delete)
;

export default router;