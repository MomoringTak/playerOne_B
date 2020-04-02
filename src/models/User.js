import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  googleId: {
    type: String
  },
  email: {
    type: String
    // required: true
  },
  nickname: { type: String, required: true },
  password: {
    type: String
  },
  age: {
    type: Number
  },
  gender: {
    type: String
  },
  newbie: {
    type: Boolean,
    default: true
  },
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookList"
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

UserSchema.plugin(findOrCreate);

const User = mongoose.model("User", UserSchema);

export default User;
