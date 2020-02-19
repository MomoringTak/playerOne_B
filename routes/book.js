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
