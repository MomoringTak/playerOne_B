import BookList from "../../models/BookList";

const getBooklistDetail = (req, res) => {
  const {
    params: { id }
  } = req;
  console.log(id);
  BookList.findOne({ _id: id })
    .populate("books")
    .exec((err, data) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", data });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    });
};

export default getBooklistDetail;
