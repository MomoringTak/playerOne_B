import ReadLogger from "../../models/ReadLogger";

const getBookWish = async (req, res) => {
  const {
    params: { id: bookId }
  } = req;

  try {
    const countBookStatus = await ReadLogger.find({ book: bookId });

    const readNum = countBookStatus.filter(item => item.doneReading === true);
    const wishNum = countBookStatus.filter(item => item.wish === true);

    res.status(200).json({
      success: true,
      msg: "성공",
      wishNumber: wishNum.length,
      readNumber: readNum.length
    });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBookWish;
