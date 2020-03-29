import ReadLogger from "../../models/ReadLogger";
import Comment from "../../models/Comment";

const getUserMyPage = async (req, res) => {
  const {
    params: { id: userId }
  } = req;

  try {
    const userCommentResult = await Comment.find({ user: userId })
      .populate({
        path: "book",
        model: "Book"
      })
      .populate({
        path: "user",
        model: "User"
      });

    const MyLogger = await ReadLogger.find({ user: userId }).populate({
      path: "book",
      model: "Book"
    });

    const wishData = MyLogger.filter(data => data.wish === true);
    const readData = MyLogger.filter(data => data.doneReading === true);

    let totalWish = [];
    let totalRead = [];

    for (let item of wishData) {
      const wishBook = await ReadLogger.find({
        book: item.book._id,
        wish: true
      });
      totalWish = [...totalWish, wishBook.length];
    }

    for (let item of readData) {
      const readBook = await ReadLogger.find({
        book: item.book._id,
        doneReading: true
      });
      totalRead = [...totalRead, readBook.length];
    }

    res.status(200).json({
      success: true,
      msg: "성공",
      userCommentResult,
      wishData,
      readData,
      totalRead,
      totalWish
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default getUserMyPage;
