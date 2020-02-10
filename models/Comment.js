const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema({});

const Comment = mongoose.model("Comment", CommentSchema);

module.exports = { Comment, CommentSchema };
