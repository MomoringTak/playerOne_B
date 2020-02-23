//BookList
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const BookListSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date
  },
  updatedAt: {
    type: Date
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
