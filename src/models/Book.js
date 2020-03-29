//Book
import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    text: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    text: true
  },
  publisher: {
    type: String,
    required: true,
    text: true
  },
  pubdate: {
    type: Date,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    text: true
  },
  keyword: {
    type: String,
    text: true
  },
  category: {
    type: String,
    text: true
  },
  difficulty: {
    type: Number
  },
  time: {
    type: String
  },
  views: {
    type: Number,
    default: 0
  },
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookList"
    }
  ],
  createdAt: {
    type: Date,
    defaut: Date.now
  },
  updatedAt: {
    type: Date,
    defaut: Date.now
  }
});

BookSchema.plugin(findOrCreate);

const Book = mongoose.model("Book", BookSchema);

export default Book;
