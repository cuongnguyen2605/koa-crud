import Router from 'koa-router';
import config from '../config';

// Student middleware and controller
import validate              from '../http/middleware/validate.middleware';
// import StudentController from '../http/controller/student.controller';
import { studentController } from '../http/controller';

const router = new Router();

// Student api
const student = 'student';

// Student router
router
  .prefix(`/${config.baseApi}/${student}`)
  .get('/', studentController.findAll)
  .get('/:id', studentController.findOne)
  .post('/', validate, studentController.create)
  .put('/:id', validate, studentController.update)
  .delete('/:id', studentController.delete)
;

export default router;
