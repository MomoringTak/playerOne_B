import ReadLogger from "../../models/ReadLogger";

const deleteRead = (req, res) => {
  const {
    query: { id }
  } = req;

  ReadLogger.deleteOne({ _id: id }, (err, deleteResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", deleteResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default deleteRead;
