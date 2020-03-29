import ReadLogger from "../../models/ReadLogger";

const getAllReadLog = async (req, res) => {
  const { body: logData } = req;
  let Scores;
  try {
    let doneReading = 0;

    for (let item of logData) {
      const logDataResult = await ReadLogger.findOne({
        book: item.book,
        user: item.user
      });

      if (logDataResult.doneReading === true) {
        doneReading++;
      }
    }

    Scores = {
      doneReading
    };

    res.status(200).json({ success: true, msg: "성공", Scores });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getAllReadLog;
