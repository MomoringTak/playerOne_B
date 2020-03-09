import Book from "../../models/Book";

const getAllBook = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json({ success: true, msg: "성공!!", books });
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }
};

export default getAllBook;
