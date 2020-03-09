import ReadLogger from "../../models/ReadLogger";

const recordLogger = async (req, res) => {
  const { body: logData } = req;

  try {
    const logResult = await ReadLogger.create(logData);
    res.status(200).json({ success: true, msg: "성공", logResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default recordLogger;
