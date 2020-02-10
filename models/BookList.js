const mongoose = require("mongoose");

const BookListSchema = new mongoose.Schema({
  booklist_title: {
    type: String,
    required: true
  },
  book: {
    type: Book,
    required: true
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  },
  Shelf: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Shelf"
  }
});

const BookList = mongoose.model("BookList", BookListSchema);

module.exports = { BookList, BookListSchema };
