import express from "express";
import {
  userRouter,
  bookRouter,
  booklistRouter,
  commentRouter,
  searchRouter,
  homeRouter,
} from "./routerController";

const router = express.Router();

router.use(`/`, homeRouter);
router.use(`/users`, userRouter);
router.use(`/books`, bookRouter);
router.use(`/booklits`, booklistRouter);
router.use(`/comments`, commentRouter);
router.use(`/serach`, searchRouter);

export default router;
