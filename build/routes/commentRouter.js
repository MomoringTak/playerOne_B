"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _commentController = require("../controllers/commentController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var commentRouter = _express["default"].Router(); //bookComment
//해당 책에 달려있는 전체 댓글들 호출 API. w/ 사용자 정보 포함.


commentRouter.get(_routes["default"].bookComment, _commentController.bookComment); //deleteComment
//해당 유저가 남긴 댓글을 삭제하는 API.

commentRouter["delete"](_routes["default"].deleteComment, _commentController.deleteComment);
var _default = commentRouter;
exports["default"] = _default;