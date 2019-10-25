import Post from '../models/post';


class PostRepository {

  /**
   * Get all Post
   */
  all() {
    return Post.find();
  };

  /**
   *
   * @param id
   */
  detail(id) {
    return Post.findById({ _id: id });
  };

  /**
   *
   * @param params
   */
  create(params) {
    return new Post(params).save();
  };

  /**
   *
   * @param params
   */
  edit(id, post) {
    return Post.findByIdAndUpdate({ _id: id }, post, { new: true });
  };

  /**
   *
   * @param id
   */
  del(id) {
    return Post.findByIdAndRemove({ _id: id });
  };

}


export default PostRepository;