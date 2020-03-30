import Comment from "../../models/Comment";

const deleteCommentProfile = async (req, res) => {
  const {
    body: { commentId, userId }
  } = req;
  try {
    await Comment.deleteOne({ uuid: commentId });
    const userCommentResult = await Comment.find({ user: userId })
      .populate({
        path: "book",
        model: "Book"
      })
      .populate({
        path: "user",
        model: "User"
      });

    res.status(200).json({ success: true, msg: "성공", userCommentResult });
  } catch (err) {
    console.log(err);
    res.status(200).json({ success: false, msg: "실패" });
  }
};

export default deleteCommentProfile;
