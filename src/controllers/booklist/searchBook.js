import Book from "../../models/Book";

const searchBook = async (req, res) => {
  const {
    params: { title: title }
  } = req;

  try {
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.status(200).json({ success: true, msg: "성공", books });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default searchBook;
