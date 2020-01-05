import Router from 'koa-router';
import config from '../config';

// Middleware
import validate from '../middleware/post.middleware';

// Controller
import PostController from '../controllers/post.controller';

const router = new Router();
const postController = new PostController();
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