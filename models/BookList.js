//BookList
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: "Booklist description is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ]
});

const BookList = mongoose.model("BookList", BookListSchema);

export default BookList;
