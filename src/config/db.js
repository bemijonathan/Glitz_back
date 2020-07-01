import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost:27017/glitz_', { useNewUrlParser: true })
    mongoose.connect(
        process.env.MONGO,
        { useNewUrlParser: true }
    );
};
