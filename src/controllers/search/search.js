import Book from "../../models/Book";
import BookList from "../../models/BookList";

const search = async (req, res) => {
  const {
    query: { keyword }
  } = req;

  try {
    const books = await Book.find({ $text: { $search: keyword } });
    const booklist = await BookList.find({
      $text: { $search: keyword }
    }).populate({
      path: "books",
      model: "Book",
      select: ["image", "title", "author", "publisher"]
    });
    res.status(200).json({ success: true, msg: "성공!", books, booklist });
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }
};

export default search;
