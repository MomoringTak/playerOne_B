//Read Logger Model

import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

const ReadLoggerSchema = new Schema({
  category: {
    type: String
  },
  age: {
    type: Number
    // required: true
  },
  gender: {
    type: String
    // required: true
  },
  time: {
    type: Number
    // required: true
  },
  difficulty: {
    type: Number
    // required: true
  },
  wish: {
    type: Boolean,
    default: true
  },
  doneReading: {
    type: Boolean,
    default: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

ReadLoggerSchema.plugin(findOrCreate);

const ReadLogger = mongoose.model("ReadLogger", ReadLoggerSchema);

export default ReadLogger;
