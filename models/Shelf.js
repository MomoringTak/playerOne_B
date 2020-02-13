//Shelf

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ShelfSchema = new Schema({
  User: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

const Shelf = mongoose.model("Shelf", ShelfSchema);

module.exports = { Shelf, ShelfSchema };
