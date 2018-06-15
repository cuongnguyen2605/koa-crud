import Router            from 'koa-router';
import config            from '../config';

// Student middleware and controller
import validate          from '../http/middleware/validate.middleware';
import StudentController from '../http/controller/student.controller';

const router = new Router();

// Student api
const student = 'student';

// Student router
router
    .prefix(`/${config.baseApi}/${student}`)
    .get('/', StudentController.findAll)
    .get('/:id', StudentController.findOne)
    .post('/', validate, StudentController.create)
    .put('/:id', validate, StudentController.update)
    .delete('/:id', StudentController.delete)
;

export default router;
