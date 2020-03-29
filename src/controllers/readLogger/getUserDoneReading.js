import ReadLogger from "../../models/ReadLogger";

const getUserDoneReading = async (req, res) => {
  const {
    params: { id: userId }
  } = req;

  try {
    const MyLogger = await ReadLogger.find({ user: userId }).populate({
      path: "book",
      model: "Book"
    });

    const readData = MyLogger.filter(data => data.doneReading === true);

    res.status(200).json({ success: false, msg: "성공", readData });
  } catch (err) {
    res.status(400).json({ success: true, msg: err });
  }
};

export default getUserDoneReading;
