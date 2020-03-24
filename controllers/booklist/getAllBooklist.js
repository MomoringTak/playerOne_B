import BookList from "../../models/BookList";

const getAllBooklist = async (req, res) => {
  console.log("hello");
  try {
    const BooklistResult = await BookList.find();
    console.log(BooklistResult);
    res.status(200).json({ success: true, msg: "성공", BooklistResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getAllBooklist;
