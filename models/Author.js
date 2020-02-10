const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  profile: {
    name: {
      firstName: {
        type: String,
        required: true
      },
      LastName: {
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

module.exports = { Author, AuthorSchema };
