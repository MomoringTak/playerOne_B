//Book

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  released_date: {
    type: Date,
    required: true
  },
  book_title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keyword: {
    type: String,
    required: true
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
  genre: {
    category: []
  },
  BookList: {
    type: Schema.Types.ObjectId,
    ref: "BookList"
  },
  Author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Author"
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

/*

//Book

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BookSchema = new Schema({
  released_date: {
    type: Date,
    required: true
  },
  book_title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  keyword: {
    type: String,
    required: true
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
  genre: {
    category: []
  },
  BookList: {
    type: Schema.Types.ObjectId,
    ref: "BookList"
  },
  Author: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "Author"
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


*/
