import Book from "../../models/Book";

const getAllBook = (req, res) => {
  Book.find(function(err, books) {
    if (books) {
      res.status(200).json({ success: true, msg: "성공!!", books });
    } else {
      res.status(400).send({ success: false, msg: err });
    }
  });
};

export default getAllBook;
