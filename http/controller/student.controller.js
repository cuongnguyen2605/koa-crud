import { studentRepository } from '../../repository';

class StudentController {

  /**
   * Get all student
   * @param ctx
   */
  async findAll(ctx) {
    ctx.body = await studentRepository.all();
  }

  /**
   * Get one student
   * @param ctx
   */
  async findOne(ctx) {
    try {
      const student = await studentRepository.detail(ctx.params.id);
      if (!student) {
        ctx.throw(404);
      }
      ctx.body = student;
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  /**
   * Create student
   * @param ctx
   */
  async create(ctx) {
    try {
      await studentRepository.create(ctx.student);
      ctx.status = 201;
      ctx.body   = { message: 'Created!' };
    } catch (err) {
      ctx.throw(422);
    }
  }

  /**
   * Update student by id
   * @param ctx
   */
  async edit(ctx) {
    try {
      const student = await studentRepository.edit(ctx.params.id, ctx.student);
      if (!student) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body   = { message: 'Updated!' };
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

  /**
   * Delete student by id
   * @param ctx
   */
  async delete(ctx) {
    try {
      const student = await studentRepository.del(ctx.params.id);
      if (!student) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body   = { message: 'Deleted!' };
    } catch (err) {
      if (err.name === 'CastError' || err.name === 'NotFoundError') {
        ctx.throw(404);
      }
      ctx.throw(500);
    }
  }

}

export default StudentController;
