"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var LikeSchema = new Schema({
  books: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  booklists: {
    type: Schema.Types.ObjectId,
    ref: "BookList"
  },
  comments: {
    type: Schema.Types.ObjectId,
    ref: "Comment"
  },
  users: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

var Like = _mongoose["default"].model("Like", LikeSchema);

var _default = Like;
exports["default"] = _default;