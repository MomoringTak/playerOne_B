import ReadLogger from "../../models/ReadLogger";

const getAllWish = async (req, res) => {
  const {
    params: { id: userId }
  } = req;

  console.log(`userId: ${userId}`);
  console.log(userId);
  try {
    const MyLogger = await ReadLogger.find({ user: userId }).populate({
      path: "book",
      model: "Book"
    });

    const wishData = MyLogger.filter(data => data.wish === true);

    res.status(200).json({ success: true, msg: "성공", wishData });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getAllWish;
