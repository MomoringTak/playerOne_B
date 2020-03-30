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
//localhost REst API server


var url = "mongodb://localhost:27017/wtb"; //heroku Rest API server
//QA끝나시면 아래 mongoose.connect(url, ) 이부분 커멘트 처리하시고 아래 production 커멘트 푸시면 됩니다... ㅎㅎㅎ
//production development 동시에 처리하는 방법 알아보다가.. 실패....
//production용 REstAPI
// mongoose.connect(process.env.MONGO_URL, {

_mongoose["default"].connect(url, {
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