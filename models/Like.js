import mongoose from "mongoose";

const Schema = mongoose.Schema;

const LikeSchema = new Schema({
  books: [
    {
      type: Schema.Types.ObjectId,
      ref: "Book"
    }
  ],
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookList"
    }
  ],
  comments: [
    {
      type: Schema.Types.ObjectId,
      ref: "Comment"
    }
  ],
  users: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

const Like = mongoose.model("Like", LikeSchema);

export default Like;
