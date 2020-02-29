import express from "express";
import Book from "../models/Book";
import Comment from "../models/Comment";
import db from "../db/db";

const router = express.Router();

//userId
//bookId
//description
//date

//댓글 저장 API

//bookComment
//해당 책에 달려있는 전체 댓글들 호출 API. w/ 사용자 정보 포함.
router.get("/:id", (req, res) => {
  const {
    params: { id: bookId }
  } = req;
  Comment.find({ book: bookId })
    .populate("user")
    .exec((err, commentResult) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", commentResult });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    });
});

export default router;
