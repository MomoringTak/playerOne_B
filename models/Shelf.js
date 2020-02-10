const mongoose = require("mongoose");

const ShelfSchema = new mongoose.Schema({
  booklist: [
    {
      type: BookList,
      required: true
    }
  ],
  host: {
    type: Schema.Types.ObjectId,
    required: true
  }
});

const Shelf = mongoose.model("Shelf", ShelfSchema);

module.exports = { Shelf, ShelfSchema };
