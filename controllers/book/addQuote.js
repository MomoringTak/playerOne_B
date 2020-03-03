import Book from "../../models/Book";
import Quote from "../../models/Quote";

const addQuote = (req, res) => {
  //{ description, author, bookId, googleId }
  const { body: quote } = req;

  Quote.create(quote, (err, quoteResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", quoteResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default addQuote;
