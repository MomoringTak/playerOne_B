import BookList from "../../models/BookList";
import Book from "../../models/Book";
import User from "../../models/User";
import ReadLogger from "../../models/ReadLogger";

const uploadBooklist = async (req, res) => {
  const {
    body: { userId }
  } = req;

  const { body: newBookList } = req;
  try {
    const bookListCreateResult = await BookList.create(newBookList);

    const bookUpdateResult = await Book.updateMany(
      { _id: { $in: bookListCreateResult.books } },
      { $push: { booklists: bookListCreateResult._id } }
    );

    let logData = [];

    for (let book of newBookList.books) {
      const logger = {
        book: book,
        user: newBookList.userId,
        wish: false,
        doneReading: false
      };

      logData = [...logData, logger];
    }

    for (let log of logData) {
      const RegisterNewLooger = await ReadLogger.findOrCreate(log);
    }

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
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default uploadBooklist;
