"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var CountLoggerSchema = new Schema({
  count: {
    type: Number
  },
  books: [{
    type: Schema.Types.ObjectId,
    ref: "Book"
  }],
  booklists: [{
    type: Schema.Types.ObjectId,
    ref: "Booklists"
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User"
  }] //시간추가

});

var CountLogger = _mongoose["default"].model("CountLogger", CountLoggerSchema);

var _default = CountLogger;
exports["default"] = _default;