import mongoose, {Schema} from 'mongoose';

const productschema = Schema({
    name: String,
    price: Number,
    category:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'categories'
    }]
})

export const products = mongoose.model('productsInfo',productschema);