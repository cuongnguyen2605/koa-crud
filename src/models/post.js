import mongoose from 'mongoose';

const { Schema } = mongoose;

const postSchema = new Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});


export default mongoose.model('Post', postSchema);