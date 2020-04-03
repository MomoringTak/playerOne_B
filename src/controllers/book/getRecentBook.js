import Book from "../../models/Book";

const getRecentBook = async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: "desc" });
    res.status(200).json({ success: true, msg: "최근 책 성공!!", books });
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }
};

export default getRecentBook;
