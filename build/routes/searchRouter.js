"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _searchController = require("../controllers/searchController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var searchRouter = _express["default"].Router(); //booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.


searchRouter.get(_routes["default"].search, _searchController.search);
var _default = searchRouter;
exports["default"] = _default;