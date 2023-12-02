const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  bookName: {
    type: String,
    trim: true,
  },
  bookAuthor: {
    type: String,
    trim: true,
  },
  bookprice: {
    type: Number,
    trim: true,
  },
  bookTitle: {
    type: Number,
    trim: true,
  },
  bookLanguage: {
    type: Number,
    trim: true,
  },
});

const book = mongoose.model("bookSchema", bookSchema);

module.exports = book;