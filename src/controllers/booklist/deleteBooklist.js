import BookList from "../../models/BookList";
import Book from "../../models/Book";
import User from "../../models/User";

const deleteBookList = async (req, res) => {
  const {
    query: { id, email }
  } = req;

  try {
    const BookListDeleteResult = await BookList.deleteOne({ _id: id });
    const UserUpdateResult = await User.updateOne(
      {
        booklists: { $in: id }
      },
      { $pull: { booklists: id } }
    );
    const BookUpdateResult = await Book.updateMany(
      { booklists: { $in: id } },
      { $pull: { booklists: id } }
    );
    const UserResult = await User.findOne({ email: email }).populate({
      path: "booklists",
      model: "BookList",
      populate: {
        path: "books",
        model: "Book",
        select: ["image", "title", "author", "publisher"]
      }
    });
    res.status(200).json({
      success: true,
      msg: "Success",
      booklist: UserResult
    });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default deleteBookList;
