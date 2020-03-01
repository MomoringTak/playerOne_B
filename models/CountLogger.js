import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CountLoggerSchema = new Schema({
  count: {
    type: Number
  },
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Booklists"
    }
  ],
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
});

const CountLogger = mongoose.model("CountLogger", CountLoggerSchema);

export default CountLogger;
