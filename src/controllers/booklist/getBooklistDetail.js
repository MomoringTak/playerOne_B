import BookList from "../../models/BookList";

const getBooklistDetail = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    const booklists = await BookList.findOne({ _id: id }).populate({
      path: "books",
      model: "Book"
    });
    res.status(200).json({ success: true, msg: "성공", booklists });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBooklistDetail;
