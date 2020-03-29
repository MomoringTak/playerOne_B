"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_dotenv["default"].config(); //process.env.PROUDCTION ? process.env.MONGO_URL : url
// console.log(process.env.MONGO_URL);


var url = "mongodb://localhost:27017/wtb";

_mongoose["default"].connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

var db = _mongoose["default"].connection;
db.once("open", function (_) {
  console.log("Database connected:", url);
});
db.on("error", function (err) {
  console.error("connection error:", err);
});
var _default = db;
exports["default"] = _default;