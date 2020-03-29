"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("core-js/stable");

require("regenerator-runtime/runtime");

var _express = _interopRequireDefault(require("express"));

var _db = _interopRequireDefault(require("./db/db"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("./routes"));

var _index = _interopRequireDefault(require("./routes/index"));

var _userRouter = _interopRequireDefault(require("./routes/userRouter"));

var _bookRouter = _interopRequireDefault(require("./routes/bookRouter"));

var _booklistRouter = _interopRequireDefault(require("./routes/booklistRouter"));

var _commentRouter = _interopRequireDefault(require("./routes/commentRouter"));

var _searchRouter = _interopRequireDefault(require("./routes/searchRouter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
app.use((0, _morgan["default"])("dev"));
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use((0, _cookieParser["default"])());
app.use(_routes["default"].home, _index["default"]);
app.use(_routes["default"].users, _userRouter["default"]);
app.use(_routes["default"].books, _bookRouter["default"]);
app.use(_routes["default"].booklists, _booklistRouter["default"]);
app.use(_routes["default"].comments, _commentRouter["default"]);
app.use(_routes["default"].searchRoot, _searchRouter["default"]); // catch 404 and forward to error handler

app.use(function (req, res, next) {
  console.log("404 error");
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
}); // development error handler
// will print stacktrace

if (app.get("env") === "development") {
  app.use(function (err, req, res, next) {
    console.log("500 error");
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: err
    });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function (err, req, res, next) {
    console.log("500 error");
    res.status(err.status || 500);
    res.send({
      message: err.message,
      error: {}
    });
  });
}

var _default = app;
exports["default"] = _default;