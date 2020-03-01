import express from "express";
import routes from "../routes";
import { bookComment, deleteComment } from "../controllers/commentController";

const commentRouter = express.Router();

//bookComment
//해당 책에 달려있는 전체 댓글들 호출 API. w/ 사용자 정보 포함.
commentRouter.get(routes.bookComment, bookComment);

//deleteComment
//해당 유저가 남긴 댓글을 삭제하는 API.
commentRouter.delete(routes.deleteComment, deleteComment);

export default commentRouter;
