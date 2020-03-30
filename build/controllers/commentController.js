"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "bookComment", {
  enumerable: true,
  get: function get() {
    return _bookComment["default"];
  }
});
Object.defineProperty(exports, "deleteComment", {
  enumerable: true,
  get: function get() {
    return _deleteComment["default"];
  }
});
Object.defineProperty(exports, "deleteCommentProfile", {
  enumerable: true,
  get: function get() {
    return _deleteCommentProfile["default"];
  }
});

var _bookComment = _interopRequireDefault(require("./comment/bookComment"));

var _deleteComment = _interopRequireDefault(require("./comment/deleteComment"));

var _deleteCommentProfile = _interopRequireDefault(require("./comment/deleteCommentProfile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }