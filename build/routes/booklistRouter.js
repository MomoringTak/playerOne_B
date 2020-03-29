"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _booklistController = require("../controllers/booklistController");

var _verify = require("../secret/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Dependencies
var booklistRouter = _express["default"].Router(); //booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.


booklistRouter.post(_routes["default"].uploadBooklist, _booklistController.uploadBooklist); //getBookList
//해당 유저가 가지고 있는 모든 booklist_id를 반환 API.

booklistRouter.get(_routes["default"].getBooklist, _verify.checkToken, _booklistController.getBooklist); //getBooklistDetail
//해당 북 리스트가 가지고 있는 책들 반환 API

booklistRouter.get(_routes["default"].getBooklistDetail, _booklistController.getBooklistDetail); //getOneBooklist
//해당 북리스트 정보를 booklist_object_id를 통해 반환 API
// booklistRouter.get(routes.getOneBooklist, getOneBooklist);
// AddBookItem In BookList
// 북리스트 생성 시 추가 할 책들 검색 API : OpenAPI 검색과 달리 DB 에 저장 된 부분들만 검색.

booklistRouter.get(_routes["default"].searchBook, _booklistController.searchBook); //deleteBookList In Booklist
//선택된 BookList 삭제.

booklistRouter["delete"](_routes["default"].deleteBookList, _booklistController.deleteBooklist);
booklistRouter.post(_routes["default"].getAllReadLog, _booklistController.getAllReadLog);
booklistRouter.get(_routes["default"].getAllBooklist, _booklistController.getAllBooklist);
var _default = booklistRouter;
exports["default"] = _default;