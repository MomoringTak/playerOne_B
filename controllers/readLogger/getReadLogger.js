import ReadLogger from "../../models/ReadLogger";

const getReadLogger = async (req, res) => {
  const { body: logInfo } = req;

  try {
    const logResult = await ReadLogger.findOne({
      user: logInfo.user,
      book: logInfo.book
    });

    res.status(200).json({ success: true, msg: "성공", logResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getReadLogger;
