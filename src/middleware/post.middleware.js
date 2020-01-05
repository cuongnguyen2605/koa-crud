export default async (ctx, next) => {
  let body = ctx.request.body;
  let title = body.title;
  let content = body.content;

  ctx.checkBody('title').notEmpty();
  ctx.checkBody('content').notEmpty();

  if (ctx.errors) {
    ctx.status = 401;
    ctx.body = ctx.errors;
    return;
  }

  ctx.post = {
    title,
    content
  };

  await next();
};