import mongoose, {Schema} from 'mongoose';

const categorieschema = Schema({
    category:[{
        title: String,
        subcatgories: [{
            title: String
        }]
    }]
})

export const categories = mongoose.model('categoriesInfo',categorieschema);
