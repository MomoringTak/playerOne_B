import Book from "../../models/Book";

const getBookDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const book = await Book.findOne({ isbn: id });
    res.status(200).json({ book, success: true, msg: "성공" });
  } catch (err) {
    res.status(400).json({ sucess: false, msg: err });
  }
};

export default getBookDetail;
