//Dependencies
import express from "express";
import db from "../db/db";
import mongoose from "mongoose";

import BookList from "../models/BookList";
import Book from "../models/Book";
import User from "../models/User";

const router = express.Router();

//booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.
router.post(`/`, function(req, res) {
  const googleId = req.body.userId;

  const dt = new Date();
  let newBookList = req.body;
  newBookList.createdAt = dt;
  newBookList.updatedAt = dt;

  BookList.create(newBookList, function(err, result) {
    if (!err) {
      let booksIds = result.books;
      booksIds = booksIds.map(item => {
        item = mongoose.Types.ObjectId(item);
        return item;
      });
      Book.updateMany(
        { _id: { $in: booksIds } },
        { $push: { booklists: result._id } },
        function(err, success) {
          if (err)
            res.status(400).json({ success: false, msg: err, id: result._id });
          else {
            User.update(
              { googleId: { $in: googleId } },
              {
                $push: { booklists: result._id }
              },
              function(err, complete) {
                if (!err) {
                  console.log(complete);
                  res.status(200).json({
                    success: true,
                    msg: "Success",
                    bookList: result,
                    result: success,
                    user: complete
                  });
                } else {
                  res
                    .status(400)
                    .json({ success: false, msg: err, id: result._id });
                }
              }
            );
          }
        }
      );
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

//getBookList
//해당 유저가 가지고 있는 모든 booklist_id를 반환해주는 API.
router.get("", (req, res) => {
  // const data = req.query.googleId;
  const {
    query: { googleId: googleId }
  } = req;
  User.findOne({ googleId: googleId }, (err, result) => {
    let booklist = result.booklists;
    if (!err) {
      res.status(200).json({ sucess: true, msg: "성공", booklist });
    } else {
      res.status(400).json({ sucess: false, msg: err });
    }
  });
});

//getOneBooklist
//해당 북리스트 정보를 반환해주는 API
router.get("/item/:id", (req, res) => {
  const {
    params: { id }
  } = req;
  BookList.findOne({ _id: id }, (err, result) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "success", result });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

// AddBookItem In BookList
// 북리스트 생성 시 추가 할 책들 검색 API : OpenAPI 검색과 달리 DB 에 저장 된 부분들만 검색.
router.get("/:title", function(req, res) {
  const {
    params: { title: title }
  } = req;
  //regex를 사용하여 Partial String 찾기
  Book.find({ title: { $regex: title, $options: "i" } }, function(err, books) {
    if (books) {
      res.status(200).json({ sucess: true, msg: "성공", books });
    } else {
      res.status(400).json({ sucess: false, msg: err });
    }
  });
});

export default router;
