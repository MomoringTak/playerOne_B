import ReadLogger from "../../models/ReadLogger";

const recordLogger = (req, res) => {
  const { body: logData } = req;

  ReadLogger.create(logData, (err, logResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", logResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default recordLogger;
