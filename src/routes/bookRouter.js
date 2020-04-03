//Dependencies
import express from "express";
import routes from "../routes";

import {
  getBook,
  getAllBook,
  uploadBook,
  commentBook,
  getBookDetail,
  addToBooklist,
  getCuration,
  getRecentBook,
  getAgeRecommendation
} from "../controllers/bookController";
import { getBookWish } from "../controllers/readLoggerController";

const bookRouter = express.Router();

bookRouter.get(routes.getCuration, getCuration);

bookRouter.get(routes.getRecentBook, getRecentBook);

bookRouter.get(routes.getAgeRecommendation, getAgeRecommendation);
//getBook
//OpenAPI 통한 책 검색 API : 클라이언트에서 키워드를 받아 큐레이션.
bookRouter.get(routes.getBook, getBook);

// getBookDetail
// 선택 된 책(Single) 정보 제공 API : isbn 키워드로 DB에서 해당되는 책 정보를 찾아 클라이언트에게 제공.
bookRouter.get(routes.getBookDetail, getBookDetail);

//getAllBook
//전체 책 정보 제공 API : DB 에 저장된 책 정보들 제공.
bookRouter.get(routes.getAllBook, getAllBook);

//addBook
//책 추가 API : Add Book 스크린에서 선택된 책들 DB에 저장.
bookRouter.post(routes.uploadBook, uploadBook);

//commentBook
//댓글모델에 해당 책 및 작성자 저장 API
bookRouter.post(routes.commentBook, commentBook);

bookRouter.post(routes.addToBooklist, addToBooklist);

bookRouter.get(routes.bookWish, getBookWish);

export default bookRouter;
