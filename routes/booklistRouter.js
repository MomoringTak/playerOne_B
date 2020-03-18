//Dependencies
import express from "express";
import routes from "../routes";
import {
  uploadBooklist,
  getBooklist,
  getOneBooklist,
  deleteBooklist,
  getBooklistDetail,
  searchBook,
  getAllReadLog
} from "../controllers/booklistController";
import { checkToken } from "../secret/verify";

const booklistRouter = express.Router();

//booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.
booklistRouter.post(routes.uploadBooklist, uploadBooklist);

//getBookList
//해당 유저가 가지고 있는 모든 booklist_id를 반환 API.
booklistRouter.get(routes.getBooklist, checkToken, getBooklist);

//getBooklistDetail
//해당 북 리스트가 가지고 있는 책들 반환 API
booklistRouter.get(routes.getBooklistDetail, getBooklistDetail);

//getOneBooklist
//해당 북리스트 정보를 booklist_object_id를 통해 반환 API
// booklistRouter.get(routes.getOneBooklist, getOneBooklist);

// AddBookItem In BookList
// 북리스트 생성 시 추가 할 책들 검색 API : OpenAPI 검색과 달리 DB 에 저장 된 부분들만 검색.
booklistRouter.get(routes.searchBook, searchBook);

//deleteBookList In Booklist
//선택된 BookList 삭제.
booklistRouter.delete(routes.deleteBookList, deleteBooklist);

booklistRouter.post(routes.getAllReadLog, getAllReadLog);

export default booklistRouter;
