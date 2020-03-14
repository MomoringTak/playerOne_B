import Comment from "../../models/Comment";

const deleteComment = async (req, res) => {
  const {
    query: { id, bookId }
  } = req;

  try {
    await Comment.deleteOne({ uuid: id });
    const commentResult = await Comment.find({ book: bookId }).populate("user");
    res.status(200).json({ success: true, msg: "성공", commentResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default deleteComment;
