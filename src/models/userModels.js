const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
    },
    indianPrice: Number,
    europeanPrice: Number,
    year: {
        type: Number, // Number type
        default: 2021,
    },
    tags: [Array],
    AuthorName: String,
    totalPages: Number,
    stockAvailable : Boolean,

}, { timestamps: true });

module.exports = mongoose.model('user', bookSchema)