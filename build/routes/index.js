"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Dependencies
var globalRouter = _express["default"].Router(); /// Method: Get, Route '/'


globalRouter.get("/", function (req, res, next) {
  // res.status(200).send("index page");
  res.json("index page");
});
var _default = globalRouter;
exports["default"] = _default;