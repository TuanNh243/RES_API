const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const products = new Schema({
    id: { type: ObjectId }, //khóa chính
    name: { type: String },
    price: { type: Number },
    quantity: { type: Number },
    image: { type: String },
    categories: { type: ObjectId, ref: 'categories' } //khóa ngoại
});
module.exports = mongoose.models.products || mongoose.model('products', products);
// product -----> products
