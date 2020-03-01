import BookList from "../models/BookList";
import Book from "../models/Book";
import User from "../models/User";

const deleteBookList = (req, res) => {
  const id = req.query.id;
  const googleId = req.query.googleId;

  BookList.deleteOne({ _id: id }, (err, result) => {
    if (!err) {
      User.updateOne(
        {
          booklists: { $in: id }
        },
        { $pull: { booklists: id } },
        (err, user) => {
          if (!err) {
            Book.updateMany(
              { booklists: { $in: id } },
              { $pull: { booklists: id } },
              (err, book) => {
                if (!err) {
                  User.findOne({ googleId: googleId })
                    .populate("booklists")
                    .exec((err, booklist) => {
                      if (!err) {
                        res
                          .status(200)
                          .json({ success: true, msg: "성공", booklist });
                      } else {
                        res.status(400).json({ success: false, msg: err });
                      }
                    });
                } else {
                  res.status(400).json({ success: false, msg: err });
                }
              }
            );
          } else {
            res.status(400).json({ success: false, msg: err });
          }
        }
      );
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default deleteBookList;
