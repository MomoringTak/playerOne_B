import BookList from "../../models/BookList";

const getBooklist = (req, res) => {
  const {
    query: { googleId: googleId }
  } = req;

  User.findOne({ googleId: googleId })
    .populate({
      path: "booklists",
      model: "BookList",
      populate: {
        path: "books",
        model: "Book",
        select: "image"
      }
    })
    .exec((err, booklist) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "성공", booklist });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    });
};

export default getBooklist;
