import Book from "../../models/Book";

const getBookDetail = (res, req) => {
  const {
    params: { id: id }
  } = req;
  Book.findOne({ isbn: id }, function(err, book) {
    if (book) {
      res.status(200).json({ book: book, success: true, msg: "fkkk" });
    } else {
      res.status(400).json({ sucess: false, msg: err });
    }
  });
};

export default getBookDetail;
