import ReadLogger from "../../models/ReadLogger";

const getBookWish = async (req, res) => {
  const {
    params: { id: bookId }
  } = req;

  try {
    const wishResult = await ReadLogger.find({ book: bookId, wish: true });
    const wishNumber = wishResult.length;
    res.status(200).json({ success: true, msg: "성공", wishNumber });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBookWish;
