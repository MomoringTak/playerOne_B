//Dependencies
import express from "express";
import mongoose from "mongoose";

import db from "../db/db";

// import Author from "../models/Author";
// import Comment from "../models/Comment";
// import Expression from "../models/Expression";
// import Genre from "../models/Genre";
// import Review from "../models/Review";
import Shelf from "../models/Shelf";
import User from "../models/User";
import Test from "../models/Test";

const router = express.Router();

/// Method: Get, Route '/'
router.get("/", function(req, res, next) {
  // res.status(200).send("index page");

  res.json(`index page`);
});

/// Method: Get, Route '/userInfo/:googleId' Example '/userInfo/googleId'
router.get("/user/:googleId", function(req, res) {
  const {
    params: { googleId: googleId }
  } = req;
  User.findOne({ googleId: googleId }, function(err, user) {
    if (user) {
      res.status(200).json({ user: user, success: true, msg: "Success" });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
});

/// Method: Post, Route '/users' Example '/users'
router.post("/user", function(req, res) {
  User.findOrCreate(
    { googleId: req.body.googleId },
    { nickname: req.body.name, email: req.body.email },
    function(err, click, created) {
      if (!err) {
        if (created) {
          Shelf.create({ user: click._id }, function(err, result) {});
        }
        res.status(200).json({ success: true, msg: "Success" });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
});

/// Method: Post, Route '/updateUser/:googleId' Example '/updateUser/googleId'
router.patch("/user/:googleId", function(req, res) {
  const googleId = req.params.googleId;
  User.updateOne(
    { googleId: googleId },
    { nickname: req.body.nickname },
    function(err) {
      if (!err) {
        res.status(200).json("Successfully updated selected name.");
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
});

/// Method: Get, Route '/hi/:id' Example '/hi/1234'
// router.get("/hi/:id", function(req, res, next) {
//   res.status(200).send(req.params.id + ": hi!");
// });

// /// Method: Get, Route '/json'
// router.get("/json", function(req, res, next) {
//   var a = {
//     hello: "hi",
//     nice_to_meet_u: "glad_to_meet_u",
//     goodbye: "good_night"
//   };
//   res.status(200).send(a);
// });

// /// Method: Get, Route '/who/:name/:age' Example '/who/mori/36'
// router.get("/who/:name/:age", function(req, res, next) {
//   var user = {
//     name: req.params.name,
//     age: req.params.age
//   };
//   res.status(200).send(user);
// });

/*
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

router.get("/test", function(req, res) {
  User.find(function(err, foundArticle) {
    console.log(foundArticle);
    res.json(foundArticle);
  });
});
*/

export default router;
