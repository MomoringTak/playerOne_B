import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: String,
  email: String,
  nickname: String,
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookList"
    }
  ]
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

export default User;
