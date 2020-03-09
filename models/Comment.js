//Comment

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    default: Date.now,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  book: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  booklist: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookLst"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
