import BookList from "../../models/BookList";
import Book from "../../models/Book";
import User from "../../models/User";

import async from "async";

const uploadBooklist = async (req, res) => {
  const {
    body: { userId }
  } = req;

  const { body: newBookList } = req;

  // const dt = new Date();
  // newBookList.createdAt = dt;
  // newBookList.updatedAt = dt;

  try {
    const bookListCreateResult = await BookList.create(newBookList);
    const bookUpdateResult = await Book.updateMany(
      { _id: { $in: bookListCreateResult.books } },
      { $push: { booklists: bookListCreateResult._id } }
    );
    const userUpdateResult = await User.update(
      { _id: { $in: userId } },
      { $push: { booklists: bookListCreateResult._id } }
    );
    res.status(200).json({
      success: true,
      msg: "Success",
      bookList: bookListCreateResult,
      result: bookUpdateResult,
      user: userUpdateResult
    });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default uploadBooklist;
