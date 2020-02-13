var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");

import Author from "./models/Author";
import Book from "./models/Book";
import BookList from "./models/BookList";
import Comment from "./models/Comment";
import Expression from "./models/Expression";
import Genre from "./models/Genre";
import Image from "./models/Image";
import Name from "./models/Name";
import Profile from "./models/Profile";
import Review from "./models/Review";
import Shelf from "./models/Shelf";
import User from "./models/User";

mongoose.connect("mongodb://localhost:27017/wtb", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//모모링님.
//콜렉션에따라 이렇게..Book.Find
router.get("/book", function(req, res) {
  Book.find(function(err, foundArticle) {
    console.log(foundArticle);
  });
});

/// Method: Get, Route '/'
router.get("/", function(req, res, next) {
  res.status(200).send("index page");
});

/// Method: Get, Route '/hi/:id' Example '/hi/1234'
router.get("/hi/:id", function(req, res, next) {
  res.status(200).send(req.params.id + ": hi!");
});

/// Method: Get, Route '/json'
router.get("/json", function(req, res, next) {
  var a = {
    hello: "hi",
    nice_to_meet_u: "glad_to_meet_u",
    goodbye: "good_night"
  };
  res.status(200).send(a);
});

/// Method: Get, Route '/who/:name/:age' Example '/who/mori/36'
router.get("/who/:name/:age", function(req, res, next) {
  var user = {
    name: req.params.name,
    age: req.params.age
  };
  res.status(200).send(user);
});

router.get(`/book`, function(req, res, next) {
  let book = {};
});
router.get(`/book/:id`, function(req, res, next) {
  let bookDetail = {};
});
router.get(`/book/recentbook`, function(req, res, next) {
  let bookRecent = {};
});

router.get(`:id/booklist`, function(req, res, next) {
  let bookList = {};
});

router.get(`:id/booklist/:booklistid`, function(req, res, next) {
  let bookListDetail = {};
});

router.get(`/shelf`, function(req, res, next) {
  let shelf = {};
});

router.get(`/:id/shelf`, function(req, res, next) {
  let userShelf = {};
});

router.get(`/:id/profile`, function(req, res, next) {
  let object = {};
});

router.get(`/book/:id/comment`, function(req, res, next) {
  let comment = {};
});

router.get(`/book/:id/expression`, function(req, res, next) {
  let expression_Book = {};
});

router.get(`/booklist/:id/expression`, function(req, res, next) {
  let expression_BookList = {};
});

// router.get(``, function (req, res, next) {
//     let object = {}
// })

module.exports = router;
