import BookList from "../../models/BookList";

const addToBooklist = async (req, res) => {
  const {
    params: { bookId, booklistId }
  } = req;

  try {
    const updateResult = await BookList.updateMany(
      { _id: { $in: booklistId } },
      { $push: { books: bookId } }
    );
    res.status(200).json({ success: true, msg: "성공", updateResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default addToBooklist;
