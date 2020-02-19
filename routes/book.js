//Dependencies
import express from "express";
import axios from "axios";
import Book from "../models/Book";
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

  async function showBook(title, display) {
    const { data } = await getBook(title, display);
    console.log(data.items);
    res.status(200).json(data.items);
  }

  showBook(title, display);
});

router.post("/", function(req, res) {
  const dt = new Date();
  const books = req.body.map(item => {
    item.createdAt = dt;
    item.updatedAt = dt;
    return item;
  });

  Book.collection.insertMany(books, { ordered: false }, function(err, book) {
    if (err) {
      //정보들을 다 수집 예시: 중복되는 타이틀, 이미 존재하는데이터로 인해 저장에 성공하지 못한 데이터, 및 성공한 데이터 표시
      res.status(400).send({ success: false, msg: err });
    } else {
      Book.find({ createdAt: dt }, function(err, doc) {
        if (err) res.status(400).send(err);
        //이게 doc을 보내면 됨.
        console.log(doc);
      });
      res.status(200).send({ success: true, msg: "성공!!", books: book });
    }
  });
});

router.get("/", function(req, res) {
  Book.find(function(err, books) {
    if (books) {
      res.status(200).json({ success: true, msg: "성공!!", books });
    } else {
      res.status(400).send({ success: false, msg: err });
    }
  });
});

export default router;
