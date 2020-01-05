export function handleError(ctx, error) {
  if (error.name === 'CastError' || error.name === 'NotFoundError') {
    ctx.throw(404);
  }
  ctx.throw(500);
}