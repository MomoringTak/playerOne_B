//Book
import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const Schema = mongoose.Schema;

// title: "아버지 정약용의 인생강의 (다산은 아들을 이렇게 가르쳤다)"
// link: "http://book.naver.com/bookdb/book_detail.php?bid=16122364"
// image: "https://bookthumb-phinf.pstatic.net/cover/161/223/16122364.jpg?type=m1&udate=20200118"
// author: "정약용"
// price: "15800"
// discount: "14220"
// publisher: "홍익출판사"
// pubdate: "20200115"
// isbn: "897065786X 9788970657868"
// description: "다산 정약용이 유배지에서 두 아들을 위해 붓을 들었다↵“어떻게 살 것인가”라는 젊은이들의 질문에 다산이 답하다!다산 정약용이 유배길을 떠나던 1801년, 그의 큰아들 학연은 19세였고 둘째 아들 학유는 16세였다. 당대 최고의 학자였던 아버지 정약용은 두 아들에게 가르칠 것이 많았다. 다산은 천리 밖... "
// selected: true

const BookSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publisher: {
    type: String,
    required: true
  },
  pubdate: {
    type: Date,
    required: true
  },
  isbn: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  keyword: {
    type: String
  },
  genre: {
    category: []
  },
  booklists: [
    {
      type: Schema.Types.ObjectId,
      ref: "BookList"
    }
  ],
  createdAt: {
    type: Date,
    required: true
  },
  updatedAt: {
    type: Date,
    required: true
  }
});

BookSchema.plugin(findOrCreate);

const Book = mongoose.model("Book", BookSchema);

export default Book;
