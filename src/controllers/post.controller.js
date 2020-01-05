import PostService from '../services/post.service';
import { handleError } from '../utils/handleError';

const postService = new PostService();

class PostConstroller {
  async findAll(ctx) {
    try {
      const posts = await postService.getAll();
      ctx.body = posts;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  async findOne(ctx) {
    try {
      const post = await postService.getOne(ctx.params.id);
      if (!post) {
        ctx.throw(404);
      }
      ctx.body = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  async create(ctx) {
    try {
      const post = await postService.create(ctx.post);
      ctx.status = 201;
      ctx.body = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  async edit(ctx) {
    try {
      const post = await postService.update(ctx.params.id, ctx.post);
      if (!post) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  async delete(ctx) {
    try {
      const post = await postService.delete(ctx.params.id);
      if (!post) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body = post;
    } catch (err) {
      handleError(err);
    }
  }
}


export default PostConstroller;