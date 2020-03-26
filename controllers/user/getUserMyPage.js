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

    res.status(200).json({
      success: true,
      msg: "성공",
      userCommentResult,
      wishData,
      readData
    });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getUserMyPage;
