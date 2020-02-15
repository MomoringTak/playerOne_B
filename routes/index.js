//Dependencies
import express from "express";
import mongoose from "mongoose";
import db from "../db/db";
import findOrCreate from "mongoose-findorcreate";

import Book from "../models/Book";
import Author from "../models/Author";
import Booklist from "../models/Booklist";
import Comment from "../models/Comment";
import Expression from "../models/Expression";
import Genre from "../models/Genre";
import Review from "../models/Review";
import Shelf from "../models/Shelf";
import User from "../models/User";
import Test from "../models/Test";

const router = express.Router();

router.get("/book", function(req, res) {
  Book.Book.find(function(err, foundArticle) {
    console.log(foundArticle);
  });
});

router.post("/test/content", function(req, res) {
  var tag = req.body.tag.split(",");

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

router.post("/users", function(req, res) {
  User.User.findOrCreate({ googleId: req.body.googleId }, function(
    err,
    click,
    created
  ) {
    console.log(`click was made ${click.googleId}`);
    User.User.findOrCreate({}, function(err, click, created) {
      console.log(`Did not create a new click yay ${click.googleId}`);
    });
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

// router.get(`/book`, function(req, res, next) {
//   let book = {};
// });
// router.get(`/book/:id`, function(req, res, next) {
//   let bookDetail = {};
// });
// router.get(`/book/recentbook`, function(req, res, next) {
//   let bookRecent = {};
// });

// router.get(`:id/booklist`, function(req, res, next) {
//   let bookList = {};
// });

// router.get(`:id/booklist/:booklistid`, function(req, res, next) {
//   let bookListDetail = {};
// });

// router.get(`/shelf`, function(req, res, next) {
//   let shelf = {};
// });

// router.get(`/:id/shelf`, function(req, res, next) {
//   let userShelf = {};
// });

// router.get(`/:id/profile`, function(req, res, next) {
//   let object = {};
// });

// router.get(`/book/:id/comment`, function(req, res, next) {
//   let comment = {};
// });

// router.get(`/book/:id/expression`, function(req, res, next) {
//   let expression_Book = {};
// });

// router.get(`/booklist/:id/expression`, function(req, res, next) {
//   let expression_BookList = {};
// });

// router.get(``, function (req, res, next) {
//     let object = {}
// })

export default router;
