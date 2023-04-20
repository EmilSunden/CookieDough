const {model, Schema} = require('mongoose');

const Product = new Schema({
    name: {
        type: String, 
        required: true,
        unique: true
    },
    price: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        unique: true
    }
});

module.exports = model('Product', Product);