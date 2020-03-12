import Comment from "../../models/Comment";

const deleteComment = async (req, res) => {
  const {
    params: { id: bookId }
  } = req;

  try {
    const commentResult = await Comment.find({ book: bookId }).populate("user");
    console.log(commentResult);
    res.status(200).json({ success: true, msg: "성공", commentResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
  // Comment.find({ book: bookId })
  //   .populate("user")
  //   .exec((err, commentResult) => {
  //     if (!err) {
  //       res.status(200).json({ success: true, msg: "성공", commentResult });
  //     } else {
  //       res.status(400).json({ success: false, msg: err });
  //     }
  //   });
};

export default deleteComment;
