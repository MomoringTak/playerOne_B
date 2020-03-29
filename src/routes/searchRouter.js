import express from "express";
import routes from "../routes";
import { search } from "../controllers/searchController";

const searchRouter = express.Router();

//booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.
searchRouter.get(routes.search, search);

export default searchRouter;
