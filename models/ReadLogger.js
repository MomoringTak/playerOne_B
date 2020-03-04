//Read Logger Model

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ReadLoggerSchema = new Schema({
  genre: {
    type: String
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  difficulty: {
    type: Number,
    required: true
  },
  books: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const ReadLogger = mongoose.model("ReadLogger", ReadLoggerSchema);

export default ReadLogger;
