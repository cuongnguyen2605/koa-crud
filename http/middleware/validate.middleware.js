export default async (ctx, next) => {

    let body          = ctx.request.body,
        full_name     = body.fullName,
        date_of_birth = body.dateOfBirth,
        address       = body.address,
        position      = body.position,
        department    = body.department
    ;

    ctx.checkBody('fullName').notEmpty();
    ctx.checkBody('dateOfBirth').notEmpty();
    ctx.checkBody('address').notEmpty();
    ctx.checkBody('position').notEmpty();
    ctx.checkBody('department').notEmpty();

    if (ctx.errors) {
        ctx.status = 401;
        ctx.body   = ctx.errors;
        return;
    }

    ctx.student = {
        full_name,
        date_of_birth,
        address,
        position,
        department
    };

    await next();

};
