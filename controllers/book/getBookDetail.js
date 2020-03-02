import Book from "../../models/Book";

const getBookDetail = (req, res) => {
  const {
    params: { id }
  } = req;

  Book.findOne({ isbn: id }, (err, book) => {
    if (book) {
      res.status(200).json({ book: book, success: true, msg: "fkkk" });
    } else {
      res.status(400).json({ sucess: false, msg: err });
    }
  });
};

export default getBookDetail;
