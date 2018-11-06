import Router from 'koa-router';
import config from '../config';

// Middleware
import validate from '../http/middleware/validate.middleware';

// Controller
import { studentController } from '../http/controller';

// Router
const router = new Router();

// Student api
const student = 'student';

// Student router
router
  .prefix(`/${config.baseApi}/${student}`)
  .get('/', studentController.findAll)
  .get('/:id', studentController.findOne)
  .post('/', validate, studentController.create)
  .put('/:id', validate, studentController.edit)
  .delete('/:id', studentController.delete)
;

export default router;
