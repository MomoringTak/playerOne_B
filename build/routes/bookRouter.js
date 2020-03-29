"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _bookController = require("../controllers/bookController");

var _readLoggerController = require("../controllers/readLoggerController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Dependencies
var bookRouter = _express["default"].Router(); //getBook
//OpenAPI 통한 책 검색 API : 클라이언트에서 키워드를 받아 큐레이션.


bookRouter.get(_routes["default"].getBook, _bookController.getBook); // getBookDetail
// 선택 된 책(Single) 정보 제공 API : isbn 키워드로 DB에서 해당되는 책 정보를 찾아 클라이언트에게 제공.

bookRouter.get(_routes["default"].getBookDetail, _bookController.getBookDetail); //getAllBook
//전체 책 정보 제공 API : DB 에 저장된 책 정보들 제공.

bookRouter.get(_routes["default"].getAllBook, _bookController.getAllBook); //addBook
//책 추가 API : Add Book 스크린에서 선택된 책들 DB에 저장.

bookRouter.post(_routes["default"].uploadBook, _bookController.uploadBook); //commentBook
//댓글모델에 해당 책 및 작성자 저장 API

bookRouter.post(_routes["default"].commentBook, _bookController.commentBook);
bookRouter.post(_routes["default"].addToBooklist, _bookController.addToBooklist);
bookRouter.get(_routes["default"].bookWish, _readLoggerController.getBookWish);
var _default = bookRouter;
exports["default"] = _default;