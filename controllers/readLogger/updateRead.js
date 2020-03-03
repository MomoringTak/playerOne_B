import ReadLogger from "../../models/ReadLogger";

const updateRead = (req, res) => {
  const {
    params: { id, time }
  } = req;

  ReadLogger.updateMany({ users: id }, { time: time }, (err, updateResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", updateResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default updateRead;
