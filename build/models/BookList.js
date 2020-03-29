"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//BookList
var Schema = _mongoose["default"].Schema;
var BookListSchema = new Schema({
  title: {
    type: String,
    required: true,
    text: true
  },
  description: {
    type: String,
    required: "Booklist description is required",
    text: true
  },
  createdAt: {
    type: Date,
    "default": Date.now
  },
  updatedAt: {
    type: Date,
    "default": Date.now
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
  }],
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

var BookList = _mongoose["default"].model("BookList", BookListSchema);

var _default = BookList;
exports["default"] = _default;