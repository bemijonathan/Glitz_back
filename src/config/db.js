import mongoose from 'mongoose';

export const dbConnection = () => {
    mongoose.Promise = global.Promise;
    // mongoose.connect('mongodb://localhost:27017/glitz_', { useNewUrlParser: true })
    mongoose.connect(
        'mongodb+srv://jona:jona@cluster0.qiede.mongodb.net/glitz?retryWrites=true&w=majority',
        { useNewUrlParser: true }
    );
};
