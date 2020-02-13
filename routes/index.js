const mongoose = require("mongoose");
var express = require("express");
var router = express.Router();
var db = require("../db/db");

var Book = require("../models/Book");

var Author = require("../models/Author");
var BookList = require("../models/BookList");
var Comment = require("../models/Comment");
var Expression = require("../models/Expression");
var Genre = require("../models/Genre");
var Image = require("../models/Image");
var Name = require("../models/Name");
var Profile = require("../models/Profile");
var Review = require("../models/Review");
var Review = require("../models/Review");
var Shelf = require("../models/Shelf");
var User = require("../models/User");
var Test = require("../models/Test");

router.get("/book", function(req, res) {
  Book.Book.find(function(err, foundArticle) {
    console.log(foundArticle);
  });
});

router.post("/test/content", function(req, res) {
  var tag = (req.body.tag).split(",");

  const newTest = Test.Test({
    content: {
      title: req.body.title,
      description: req.body.description
    },
    tag: tag
  });

  newTest.save(function(err) {
    if (!err)
      res.json({ success: true, msg: "Successfully added a new test!" });
    else res.json({ success: false, msg: err });
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
