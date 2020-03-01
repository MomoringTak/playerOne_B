import Comment from "../../models/Comment";

const commentBook = (req, res) => {
  const { body: comment } = req;
  const dt = new Date();

  //updating time in comment
  comment.createdAt = dt;
  comment.updatedAt = dt;
  Comment.create(comment, (err, commentResult) => {
    if (!err) {
      res.status(200).json({ success: true, msg: "성공", commentResult });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default commentBook;
