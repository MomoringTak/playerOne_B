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
//해당 북리스트 정보를 booklist_object_id를 통해 반환해주는 API
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

//deleteBookList In Booklist
//선택된 BookList 삭제.
//문제.
router.delete("/", function(req, res) {
  const id = req.query.id;
  BookList.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      //해당 북릭스트 아이디를 가진 유저와 책을 찾고 해당 북리스트를 삭제하고 업데이트 시켜줄려는 로직. 구성 중.
      //문제 : Array of ObjectId로 구성되있는 field에서 해당되는 Id를 포함하고 있다라는 컨디션을 못찾음.
      //찾을 시 해당 booklist를 가진 user는 booklist에서 해당 booklist를 제외하고 업데이트.
      //Update Many -> booklist를 가진 USER와 Book 찾고, 해당 booklist 제외시켜서 업데이트 ;;
      User.find(
        {
          booklists: { $in: id }
        },
        (err, user) => {
          if (!err) {
            console.log(user);
            res.status(200).json(user);
          } else {
            res.status(400).json({ success: false, msg: err });
          }
        }
      );
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

export default router;
