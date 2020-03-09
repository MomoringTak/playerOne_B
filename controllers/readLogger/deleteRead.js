import ReadLogger from "../../models/ReadLogger";

const deleteRead = async (req, res) => {
  const {
    query: { id }
  } = req;

  try {
    await ReadLogger.deleteOne({ _id: id });
    res.status(200).json({ success: true, msg: "성공" });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default deleteRead;
