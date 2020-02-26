//Dependencies
import express from "express";
import db from "../db/db";
import mongoose from "mongoose";

import User from "../models/User";
import BookList from "../models/BookList";
import Book from "../models/Book";

const router = express.Router();

//booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.
router.post(`/`, function(req, res) {
  const googleId = req.body.userId;

  const dt = new Date();
  let newBookList = req.body;
  newBookList.createdAt = dt;
  newBookList.updatedAt = dt;

  var async = require('async');
  var bookListCreateResult;
  var bookUpdateResult;
  var userUpdateResult;
  var Tasks = [
    function(callback) {
      BookList.create(newBookList, function(err, result) {
        if (!err) {
          bookListCreateResult = result;
          callback(null);
        } 
        else callback(err);
      });
    },
    function(callback) {
      Book.updateMany(
        { _id: { $in: bookListCreateResult.books } },
        { $push: { booklists: bookListCreateResult._id } },
        function(err, result) {
          if(!err) {
            bookUpdateResult = result;
            callback(null);
          }
          else callback(err);
        }
      );
    },
    function(callback) {
      User.update(
        { googleId: { $in: googleId } },
        { $push: { booklists: bookListCreateResult._id } },
        function(err, result) {
          if (!err) {
            userUpdateResult = result;
            callback(null);
          } 
          else callback(err);
        }
      );
    }
  ];

  async.series(Tasks, function (err, results) {
    if (err != null) res.status(400).json({ success: false, msg: err });
    else {
      res.status(200).json({
        success: true,
        msg: "Success",
        bookList: bookListCreateResult,
        result: bookUpdateResult,
        user: userUpdateResult
      });
    }
  });

  // BookList.create(newBookList, function(err, result) {
  //   if (!err) {
  //     let booksIds = result.books;
  //     Book.updateMany(
  //       { _id: { $in: booksIds } },
  //       { $push: { booklists: result._id } },
  //       function(err, success) {
  //         if (err)
  //           res.status(400).json({ success: false, msg: err, id: result._id });
  //         else {
  //           User.update(
  //             { googleId: { $in: googleId } },
  //             {
  //               $push: { booklists: result._id }
  //             },
  //             function(err, complete) {
  //               if (!err) {
  //                 console.log(complete);
  //                 res.status(200).json({
  //                   success: true,
  //                   msg: "Success",
  //                   bookList: result,
  //                   result: success,
  //                   user: complete
  //                 });
  //               } else {
  //                 res
  //                   .status(400)
  //                   .json({ success: false, msg: err, id: result._id });
  //               }
  //             }
  //           );
  //         }
  //       }
  //     );
  //   } else {
  //     res.status(400).json({ success: false, msg: err });
  //   }
  // });


  
});

//getBookList
//해당 유저가 가지고 있는 모든 booklist_id를 반환 API.
router.get("", (req, res) => {
  const {
    query: { googleId: googleId }
  } = req;

  User.findOne({ googleId: googleId })
    .populate({
      path: "booklists",
      model: "BookList",
      populate: {
        path: "books",
        model: 'Book',
        select: "image"
      }
    })
    .exec((err, booklist) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", booklist });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    });
});

//getBooks
//해당 북 리스트가 가지고 있는 책들 반환 API
router.get("/detail/:id", (req, res) => {
  const {
    params: { id }
  } = req;

  BookList.findOne({ _id: id })
    .populate("books")
    .exec((err, data) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", data });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    });
});

//getOneBooklist
//해당 북리스트 정보를 booklist_object_id를 통해 반환 API
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
router.delete("/", function(req, res) {
  const id = req.query.id;
  const googleId = req.query.googleId;

  BookList.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      User.updateOne(
        {
          booklists: { $in: id }
        },
        { $pull: { booklists: id } },
        (err, user) => {
          if (!err) {
            Book.updateMany(
              { booklists: { $in: id } },
              { $pull: { booklists: id } },
              (err, book) => {
                if (!err) {
                  User.findOne({ googleId: googleId })
                    .populate("booklists")
                    .exec((err, booklist) => {
                      if (!err) {
                        res
                          .status(200)
                          .json({ success: true, msg: "성공", booklist });
                      } else {
                        res.status(400).json({ success: false, msg: err });
                      }
                    });
                } else {
                  res.status(400).json({ success: false, msg: err });
                }
              }
            );
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
