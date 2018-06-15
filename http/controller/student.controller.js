import Student from '../../database/student';

class StudentController {

    /**
     * Get all student
     * @param ctx
     */
    async findAll(ctx) {
        ctx.body = await Student.find();
    }

    /**
     * Get one student
     * @param ctx
     */
    async findOne(ctx) {
        try {
            const student = await Student.findById(ctx.params.id);
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
            await new Student(ctx.student).save();
            ctx.status = 201;
            ctx.body   = {message: 'Created!'};
        } catch (err) {
            ctx.throw(422);
        }
    }

    /**
     * Update student by id
     * @param ctx
     */
    async update(ctx) {
        try {
            const student = await Student.findByIdAndUpdate(ctx.params.id, ctx.student);
            if (!student) {
                ctx.throw(404);
            }
            ctx.status = 200;
            ctx.body   = {message: 'Updated!'};
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
            const student = await Student.findByIdAndRemove(ctx.params.id);
            if (!student) {
                ctx.throw(404);
            }
            ctx.status = 200;
            ctx.body   = {message: 'Deleted!'};
        } catch (err) {
            if (err.name === 'CastError' || err.name === 'NotFoundError') {
                ctx.throw(404);
            }
            ctx.throw(500);
        }
    }

}

export default new StudentController();