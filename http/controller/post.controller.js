import { postRepository } from '../../repository';
import { handleError }    from '../../utils/handleError';

class PostConstroller {

  /**
   * 
   * @param {*} ctx 
   */
  async findAll(ctx) {
    try {
      const posts = await postRepository.all();
      ctx.body = posts;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  /**
   * 
   * @param {*} ctx 
   */
  async findOne(ctx) {
    try {
      const post = await postRepository.detail(ctx.params.id);
      if (!post) {
        ctx.throw(404);
      }
      ctx.body = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  /**
   * 
   * @param {*} ctx 
   */
  async create(ctx) {
    try {
      const post = await postRepository.create(ctx.post);
      ctx.status = 201;
      ctx.body   = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  /**
   * 
   * @param {*} ctx 
   */
  async edit(ctx) {
    try {
      const post = await postRepository.edit(ctx.params.id, ctx.post);
      if (!post) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body   = post;
    } catch (err) {
      handleError(ctx, err);
    }
  }

  /**
   * 
   * @param {*} ctx 
   */
  async delete(ctx) {
    try {
      const post = await postRepository.del(ctx.params.id);
      if (!post) {
        ctx.throw(404);
      }
      ctx.status = 200;
      ctx.body   = post;
    } catch (err) {
      handleError(err);
    }
  }

}

export default PostConstroller;