var express = require("express");
var router = express.Router();

//Method: Get, Route '/test3/book/:id' Example '/test3/book/135
router.get("/test3/book/:id", function(req, res, next) {
  var book = {
    book_title: req.params.book_title,
    released_date: req.params.released_date
  };
  res.status(200).send(user);
});
module.exports = router;
