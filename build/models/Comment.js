"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Comment
var Schema = _mongoose["default"].Schema;
var CommentSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    "default": Date.now,
    required: true
  },
  updatedAt: {
    type: Date,
    "default": Date.now,
    required: true
  },
  uuid: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  booklist: {
    type: Schema.Types.ObjectId,
    ref: "BookLst"
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref: "Comment"
  }]
});

var Comment = _mongoose["default"].model("Comment", CommentSchema);

var _default = Comment;
exports["default"] = _default;