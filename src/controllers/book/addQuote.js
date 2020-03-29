import Book from "../../models/Book";
import Quote from "../../models/Quote";

const addQuote = async (req, res) => {
  //{ description, author, bookId, googleId }
  const { body: quote } = req;

  try {
    await Quote.create(quote);
    res.status(200).json({ success: true, msg: "성공", quoteResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default addQuote;
