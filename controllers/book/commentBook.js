import Comment from "../../models/Comment";

const commentBook = async (req, res) => {
  const { body: comment } = req;

  try {
    const commentResult = await Comment.create(comment);
    res.status(200).json({ success: true, msg: "성공", commentResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default commentBook;
