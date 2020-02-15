//Author
import mongoose from "mongoose";

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  profile: {
    name: {
      firstName: {
        type: String,
        required: true
      },
      lastName: {
        type: String,
        required: true
      }
    },
    image: {
      url: {
        type: String,
        required: true
      },
      caption: {
        type: String,
        required: true
      }
    },
    email: {
      type: String,
      required: true
    }
  },
  Book: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Book"
  }
});

const Author = mongoose.model("Author", AuthorSchema);

export default Author;
