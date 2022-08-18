const mongoose = require('mongoose');





const bookSchema = new mongoose.Schema({
    book_name: {
        type: String,
        required: true,
    },
    author_id: Number,
    price: Number,
    retting: Number

}, { timestamps: true });



module.exports = mongoose.model('user', bookSchema)