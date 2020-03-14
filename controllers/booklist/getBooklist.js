import User from "../../models/User";

const getBooklist = async (req, res) => {
  const {
    query: { email }
  } = req;

  try {
    const booklist = await User.findOne({ email: email }).populate({
      path: "booklists",
      model: "BookList",
      populate: {
        path: "books",
        model: "Book",
        select: ["image", "title", "author", "publisher"]
      }
    });
    res.status(200).json({ success: true, msg: "성공", booklist });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getBooklist;
