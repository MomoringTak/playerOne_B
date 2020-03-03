import Book from "../../models/Book";
import BookList from "../../models/BookList";

const addToBooklist = (req, res) => {
  const {
    params: { bookId, booklistId }
  } = req;

  BookList.updateMany(
    { _id: { $in: booklistId } },
    { $push: { books: bookId } },
    (err, updateResult) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", updateResult });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
};

export default addToBooklist;
