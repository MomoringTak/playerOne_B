import BookList from "../../models/BookList";

const getOneBooklist = (req, res) => {
  const {
    params: { id }
  } = req;
  BookList.findOne({ _id: id }, (err, result) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "success", result });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default getOneBooklist;
