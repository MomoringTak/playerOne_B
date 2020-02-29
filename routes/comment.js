import express from "express";
import Book from "../models/Book";
import Comment from "../models/Comment";
import db from "../db/db";
import { restart } from "nodemon";

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

//deleteComment
//해당 유저가 남긴 댓글을 삭제하는 API.
router.delete("/", (req, res) => {
  const {
    query: { id }
  } = req;
  console.log(id);

  Comment.deleteOne({ _id: id }, (err, deleteResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", deleteResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

export default router;
