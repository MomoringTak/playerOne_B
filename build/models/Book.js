"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Book
var Schema = _mongoose["default"].Schema;
var BookSchema = new Schema({
  title: {
    type: String,
    required: true,
    text: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true,
    text: true
  },
  publisher: {
    type: String,
    required: true,
    text: true
  },
  pubdate: {
    type: Date,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true,
    text: true
  },
  keyword: {
    type: String,
    text: true
  },
  category: {
    type: String,
    text: true
  },
  difficulty: {
    type: Number
  },
  time: {
    type: String
  },
  views: {
    type: Number,
    "default": 0
  },
  booklists: [{
    type: Schema.Types.ObjectId,
    ref: "BookList"
  }],
  createdAt: {
    type: Date,
    defaut: Date.now
  },
  updatedAt: {
    type: Date,
    defaut: Date.now
  }
});
BookSchema.plugin(_mongooseFindorcreate["default"]);

var Book = _mongoose["default"].model("Book", BookSchema);

var _default = Book;
exports["default"] = _default;