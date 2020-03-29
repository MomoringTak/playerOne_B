"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "getBook", {
  enumerable: true,
  get: function get() {
    return _getBook["default"];
  }
});
Object.defineProperty(exports, "getBookDetail", {
  enumerable: true,
  get: function get() {
    return _getBookDetail["default"];
  }
});
Object.defineProperty(exports, "getAllBook", {
  enumerable: true,
  get: function get() {
    return _getAllBook["default"];
  }
});
Object.defineProperty(exports, "uploadBook", {
  enumerable: true,
  get: function get() {
    return _uploadBook["default"];
  }
});
Object.defineProperty(exports, "commentBook", {
  enumerable: true,
  get: function get() {
    return _commentBook["default"];
  }
});
Object.defineProperty(exports, "addToBooklist", {
  enumerable: true,
  get: function get() {
    return _addToBooklist["default"];
  }
});

var _getBook = _interopRequireDefault(require("./book/getBook"));

var _getBookDetail = _interopRequireDefault(require("./book/getBookDetail"));

var _getAllBook = _interopRequireDefault(require("./book/getAllBook"));

var _uploadBook = _interopRequireDefault(require("./book/uploadBook"));

var _commentBook = _interopRequireDefault(require("./book/commentBook"));

var _addToBooklist = _interopRequireDefault(require("./book/addToBooklist"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }