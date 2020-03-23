import ReadLogger from "../../models/ReadLogger";

const handleDoneRead = async (req, res) => {
  const { body: logData } = req;
  try {
    const logExist = await ReadLogger.findOneAndUpdate(
      { user: logData.user, book: logData.book },
      { doneReading: logData.doneReading, wish: false }
    );

    if (logExist === null) {
      await ReadLogger.create(logData);
    }

    res.status(200).json({ success: true, msg: "성공", logExist });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default handleDoneRead;
