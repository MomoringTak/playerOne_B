import BookList from "../../models/BookList";

const getAllBooklist = async (req, res) => {
  try {
    const BooklistResult = await BookList.find()
      .populate({
        path: "userId",
        model: "User"
      })
      .populate({
        path: "books",
        model: "Book",
        select: ["image", "title", "author", "publisher"]
      });
    res.status(200).json({ success: true, msg: "성공", BooklistResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getAllBooklist;
