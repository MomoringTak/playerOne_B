import BookList from "../../models/BookList";
import Book from "../../models/Book";
import User from "../../models/User";

import async from "async";

const deleteBookList = (req, res) => {
  const {
    query: { id, email }
  } = req;

  let BookListDeleteResult;
  let UserUpdateResult;
  let BookUpdateResult;
  let UserResult;

  const Tasks = [
    callback => {
      BookList.deleteOne({ _id: id }, (err, result) => {
        if (!err) {
          BookListDeleteResult = result;
          callback(null);
        } else {
          callback(err);
        }
      });
    },
    callback => {
      User.updateOne(
        {
          booklists: { $in: id }
        },
        { $pull: { booklists: id } },
        (err, result) => {
          if (!err) {
            UserUpdateResult = result;
            callback(null);
          } else {
            callback(err);
          }
        }
      );
    },
    callback => {
      Book.updateMany(
        { booklists: { $in: id } },
        { $pull: { booklists: id } },
        (err, result) => {
          if (!err) {
            BookUpdateResult = result;
            callback(null);
          } else {
            callback(err);
          }
        }
      );
    },
    callback => {
      User.findOne({ email: email })
        .populate("booklists")
        .exec((err, result) => {
          if (!err) {
            UserResult = result;
            callback(null);
          } else {
            callback(err);
          }
        });
    }
  ];

  async.series(Tasks, (err, result) => {
    if (err != null) res.status(400).json({ success: false, msg: err });
    else {
      res.status(200).json({
        success: true,
        msg: "Success",
        booklist: UserResult
      });
    }
  });
};

export default deleteBookList;
