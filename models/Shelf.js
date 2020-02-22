//Shelf

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const ShelfSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  }
});

const Shelf = mongoose.model("Shelf", ShelfSchema);

export default Shelf;
