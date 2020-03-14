import Comment from "../../models/Comment";

const userComment = async (req, res) => {
  const {
    params: { id }
  } = req;

  console.log(id);
  //The Data which must be displayed on UserProfile
  /*
    
    comment data including description and dates 
    the commented book

    */

  try {
    const userCommentResult = await Comment.find({ user: id }).populate({
      path: "book",
      model: "Book",
      populate: {
        path: "user",
        model: "User"
      }
    });
    res.status(200).json({ success: true, msg: "성공", userCommentResult });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default userComment;
