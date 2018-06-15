import mongoose from 'mongoose';

const { Schema } = mongoose;

const studentSchema = new Schema({
    full_name    : {
        type: String
    },
    date_of_birth: {
        type: Date
    },
    address      : {
        type: String
    },
    position     : {
        type: String
    },
    department   : {
        type: String
    }
});

export default mongoose.model('Student', studentSchema);