//Dependencies
import express from "express";
import db from "../db/db";

import BookList from "../models/BookList";
import Book from "../models/Book";

const router = express.Router();

// const addBooktoBooklist = function(booklistId, bookId) {
//   return BookList.findByIdAndUpdate(
//     booklistId,
//     { $push: { books: bookId } },
//     { new: true, useFindAndModify: false }
//   );
// };

// const addBooklisttoBook = function(bookId, booklistId) {
//   return Book.findByIdAndUpdate(
//     bookId,
//     { $push: { booklists: booklistId } },
//     { new: true, useFindAndModify: false }
//   );
// };

// const getBooklistWithPopulate = id => {
//   return BookList.findById(id).populate("books");
// };

// const getBookWithPouplate = id => {
//   return Book.findById(id).populate("booklist");
// };

//booklist 생성 API : 제목과 선택된 책들로 구성된 Booklist 추가.
router.post(`/`, function(req, res) {
  //오는 데이터형식
  /*
    {
      title : (타이틀 값),
      items : (선택된 book_id 값들)
    }
  */
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
