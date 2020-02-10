const mongoose = require("mongoose");

const ReviewSchema = new mongoose.Schema({
  expression: {
    emotion_expression: []
  },
  createdAt: {
    type: String,
    required: true
  },
  User: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User"
  },
  Book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Book"
  }
});

const Review = mongoose.model("Review", ReviewSchema);

module.exports = { Review, ReviewSchema };
