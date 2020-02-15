//Comment

import mongoose from "mongoose";

const Schema = mongoose.Schema;

const CommentSchema = new Schema({});

const Comment = mongoose.model("Comment", CommentSchema);

export default Comment;
