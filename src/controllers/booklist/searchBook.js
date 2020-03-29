import Book from "../../models/Book";

const searchBook = async (req, res) => {
  const {
    params: { title: title }
  } = req;

  try {
    const books = await Book.find({ title: { $regex: title, $options: "i" } });
    res.status(200).json({ sucess: true, msg: "성공", books });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: err });
  }
};

export default searchBook;
