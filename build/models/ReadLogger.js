"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Read Logger Model
var Schema = _mongoose["default"].Schema;
var ReadLoggerSchema = new Schema({
  category: {
    type: String
  },
  age: {
    type: Number // required: true

  },
  gender: {
    type: String // required: true

  },
  time: {
    type: Number // required: true

  },
  difficulty: {
    type: Number // required: true

  },
  wish: {
    type: Boolean,
    "default": true
  },
  doneReading: {
    type: Boolean,
    "default": true
  },
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book"
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});
ReadLoggerSchema.plugin(_mongooseFindorcreate["default"]);

var ReadLogger = _mongoose["default"].model("ReadLogger", ReadLoggerSchema);

var _default = ReadLogger;
exports["default"] = _default;