export default {
  port    : process.env.PORT || 3001,
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/post',
  baseApi : 'v1'
};
