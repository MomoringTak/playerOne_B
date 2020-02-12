var express = require("express");
var router = express.Router();

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

//모모링님 여기 이놈입니다!!
router.get(`${userId}/booklist/${booklistId}`, function(req, res, next) {
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
