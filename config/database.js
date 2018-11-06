import mongoose from 'mongoose';
import config   from '../config';


module.exports = mongoose.connect(config.mongoURL, (error) => {
  if (error) throw error;
});
