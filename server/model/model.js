const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    price: {
        type: Number,
        require: true
    },
    quantity: Number,
    description:String,
    rating: Number
})

const Productdb = mongoose.model('product', schema);

module.exports = Productdb;