import PostRepository from '../repositories/post.repository';

const postRepository = new PostRepository();

class PostService {
  async getAll() {
    const lstPost = await postRepository.all();
    return lstPost;
  }

  async getOne(id) {
    const post = await postRepository.detail(id);
    return post;
  }

  async create(post) {
    const result = await postRepository.create(post);
    return result;
  }

  async update(id, post) {
    const result = await postRepository.edit(id, post);
    return result;
  }

  async delete(id) {
    const result = await postRepository.del(id);
    return result;
  }
}


export default PostService;