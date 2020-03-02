import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nickname: { type: String, required: true },
  age: {
    type: Number
  },
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
