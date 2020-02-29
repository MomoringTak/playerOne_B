//Dependencies
import express from "express";
import axios from "axios";
import Book from "../models/Book";
import Comment from "../models/Comment";
import User from "../models/User";

import db from "../db/db";

const router = express.Router();

//네이버 검색 API
const api = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
  headers: {
    "X-Naver-Client-id": "6H7Ziz2RYe9uqckrEwAW",
    "X-Naver-Client-Secret": "Q_8KZebCX7"
  }
});

//getBook
//OpenAPI 통한 책 검색 API : 클라이언트에서 키워드를 받아 큐레이션.
router.get("/:title/:display", function(req, res) {
  const {
    params: { title: title, display: display }
  } = req;

  const getBook = (title, display) =>
    api.get("", {
      params: {
        d_titl: title,
        display: display
      }
    });

  const showBook = async (title, display) => {
    const { data } = await getBook(title, display);
    res.status(200).json(data.items);
  };

  showBook(title, display);
});

//getAllBook
//전체 책 정보 제공 API : DB 에 저장된 책 정보들 제공.
router.get("/", function(req, res) {
  Book.find(function(err, books) {
    if (books) {
      res.status(200).json({ success: true, msg: "성공!!", books });
    } else {
      res.status(400).send({ success: false, msg: err });
    }
  });
});

//getBookDetail
// 선택 된 책(Single) 정보 제공 API : isbn 키워드로 DB에서 해당되는 책 정보를 찾아 클라이언트에게 제공.
router.get("/:id", function(req, res) {
  const {
    params: { id: id }
  } = req;
  Book.findOne({ isbn: id }, function(err, book) {
    if (book) {
      res.status(200).json({ book: book, success: true, msg: "fkkk" });
    } else {
      res.status(400).json({ sucess: false, msg: err });
    }
  });
});

//addBook
//책 추가 API : Add Book 스크린에서 선택된 책들 DB에 저장.
router.post("/", function(req, res) {
  const dt = new Date();
  const books = req.body.map(item => {
    item.createdAt = dt;
    item.updatedAt = dt;
    return item;
  });

  Book.collection.insertMany(books, { ordered: false }, function(err, result) {
    if (err) {
      res.status(400).send({ success: false, msg: err });
    } else {
      Book.find({ createdAt: dt }, function(err, doc) {
        if (err) res.status(400).send(err);
        console.log(doc);
      });
      res.status(200).send({ success: true, msg: "성공!!", result: result });
    }
  });
});

//commentBook
//댓글모델에 해당 책 및 작성자 저장 API
router.post("/comment", (req, res) => {
  const { body: comment } = req;
  const dt = new Date();

  //updating time in comment
  comment.createdAt = dt;
  comment.updatedAt = dt;
  Comment.create(comment, (err, commentResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", commentResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

export default router;
