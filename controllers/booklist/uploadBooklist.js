import BookList from "../../models/BookList";
import Book from "../../models/Book";
import User from "../../models/User";

import async from "async";

const uploadBooklist = (req, res) => {
  const googleId = req.body.userId;

  const dt = new Date();
  const newBookList = req.body;
  newBookList.createdAt = dt;
  newBookList.updatedAt = dt;

  let bookListCreateResult;
  let bookUpdateResult;
  let userUpdateResult;

  const Tasks = [
    callback => {
      BookList.create(newBookList, (err, result) => {
        if (!err) {
          bookListCreateResult = result;
          callback(null);
        } else callback(err);
      });
    },
    callback => {
      Book.updateMany(
        { _id: { $in: bookListCreateResult.books } },
        { $push: { booklists: bookListCreateResult._id } },
        (err, result) => {
          if (!err) {
            bookUpdateResult = result;
            callback(null);
          } else callback(err);
        }
      );
    },
    callback => {
      User.update(
        { googleId: { $in: googleId } },
        { $push: { booklists: bookListCreateResult._id } },
        (err, result) => {
          if (!err) {
            userUpdateResult = result;
            callback(null);
          } else callback(err);
        }
      );
    }
  ];

  async.series(Tasks, function(err, results) {
    if (err != null) res.status(400).json({ success: false, msg: err });
    else {
      res.status(200).json({
        success: true,
        msg: "Success",
        bookList: bookListCreateResult,
        result: bookUpdateResult,
        user: userUpdateResult
      });
    }
  });
};

export default uploadBooklist;
