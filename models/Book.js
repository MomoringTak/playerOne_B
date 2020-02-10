const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true
  },
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
  password: {
    type: String,
    required: true
  },
  nickname: {
    type: String
  },
  quote: {
    type: String
  },
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

const Book = mongoose.model("Book", BookSchema);

module.exports = { Book, BookSchema };
