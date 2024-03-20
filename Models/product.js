const mongoose = require('mongoose');
const { Schema } = mongoose;
// create the schema first for configuration and then it's make a model
const productSchema = new Schema({
    title: { type: String, required: true, unique: true},
    description: { type: String},
    price: {type: Number, min: [0, 'wrong min price'], max: [10000000, 'wrong max price'], required: true},
    discountPercentage: {type: Number, min: [0, 'wrong discount discount'], max: [50, 'wrong max discount']},
    rating: {type: Number, min: [0, 'wrong min rating'], max: ['5', 'wrong max rating'], default: 0},
    stock: {type: Number, min: [0, 'wrong min stock']},
    brand: {type: String, required: true},
    category: {type: String, required: true},
    thumbnail: {type: String, required: true},
    images: [String]
})

exports.Product = mongoose.model('Product', productSchema);