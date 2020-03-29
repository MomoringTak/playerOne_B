import ReadLogger from "../../models/ReadLogger";

const updateRead = async (req, res) => {
  const {
    params: { id, time }
  } = req;

  try {
    const updateResult = await ReadLogger.updateMany(
      { users: id },
      { time: time }
    );

    res.status(200).json({ success: true, msg: "성공", updateResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default updateRead;
