"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseFindorcreate = _interopRequireDefault(require("mongoose-findorcreate"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Schema = _mongoose["default"].Schema;
var UserSchema = new Schema({
  googleId: {
    type: String
  },
  email: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  newbie: {
    type: Boolean,
    "default": true
  },
  booklists: [{
    type: Schema.Types.ObjectId,
    ref: "BookList"
  }]
});
UserSchema.plugin(_mongooseFindorcreate["default"]);

var User = _mongoose["default"].model("User", UserSchema);

var _default = User;
exports["default"] = _default;