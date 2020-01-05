import Post from '../models/post';


class PostRepository {
  all() {
    return Post.find();
  };

  detail(id) {
    return Post.findById({ _id: id });
  };

  create(params) {
    return new Post(params).save();
  };

  edit(id, post) {
    return Post.findByIdAndUpdate({ _id: id }, post, { new: true });
  };

  del(id) {
    return Post.findByIdAndRemove({ _id: id });
  };
}


export default PostRepository;