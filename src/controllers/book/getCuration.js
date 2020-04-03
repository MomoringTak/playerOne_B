// import BookList from "../../models/BookList";
import Comment from "../../models/Comment";
import ReadLogger from "../../models/ReadLogger";
import Book from "../../models/Book";

/*
1. 좋아요 제일많은 탑 8 
- 최근 1주일 한으로 데이터 필터링 
- 리드로거에서 wish 값 제일 높은 탑 8 sorting


2. 댓글이 제일많은 탑 8
- 최근 1주일 한으로 데이터 필터링 
- Comment 모델에서 중복되있는 북아이디 탑 8
- Comment.find().sort({createdAt : desc})


3. 북리스트에 공통적으로 자주 등록되는 탑 8
- 최근 1주일 한으로 데이터 필터링 
- Booklist에서 BookId가 제일 많이 포함되는 책 탑8
  */

const getCuration = async (req, res) => {
  try {
    let wishGroup = [];

    //같은 책 중복제거 아이디만 가져옴.
    const uniqueTopWishBook = await ReadLogger.find()
      .where("wish")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .distinct("book");

    let countWish = [];

    for (let item of uniqueTopWishBook) {
      const countVal = await ReadLogger.count()
        .where("book")
        .equals(item)
        .where("wish")
        .equals(true);

      countWish = [...countWish, { book: item, wishNum: countVal }];
    }

    countWish.sort((a, b) => {
      return a.wishNum > b.wishNum ? -1 : a.wishNum < b.wishNum ? 1 : 0;
    });

    for (let i = 0; i < 8; i++) {
      if (countWish[i] !== undefined)
        wishGroup = [...wishGroup, countWish[i].book];
    }
    //-----------------------------------------------------//

    let readGroup = [];

    const uniqueTopReadBook = await ReadLogger.find()
      .where("doneReading")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .distinct("book");

    let countRead = [];

    for (let item of uniqueTopReadBook) {
      const countVal = await ReadLogger.count()
        .where("book")
        .equals(item)
        .where("doneReading")
        .equals(true);

      countRead = [...countRead, { book: item, readNum: countVal }];
    }

    countRead.sort((a, b) => {
      return a.readNum > b.readNum ? -1 : a.readNum < b.readNum ? 1 : 0;
    });

    for (let i = 0; i < 8; i++) {
      if (countRead[i] !== undefined)
        readGroup = [...readGroup, countRead[i].book];
    }
    //-----------------------------------------------------//
    let commentGroup = [];

    const uniqueComment = await Comment.find()
      .sort({ createdAt: "desc" })
      .distinct("book");

    let countComment = [];

    for (let item of uniqueComment) {
      const countVal = await Comment.count()
        .where("book")
        .equals(item);

      countComment = [...countComment, { book: item, commentNum: countVal }];
    }

    countComment.sort((a, b) => {
      return a.commentNum > b.commentNum
        ? -1
        : a.commentNum < b.commentNum
        ? 1
        : 0;
    });

    for (let i = 0; i < 8; i++) {
      if (countComment[i] !== undefined)
        commentGroup = [...commentGroup, countComment[i].book];
    }

    //-----------------------------------------------------//
    // 종합
    //해당 유저 나이 범위 탑 좋아요 책아이디들 책 모델에서 조회.

    const wishTop = await Book.find({ _id: wishGroup });
    const readTop = await Book.find({ _id: readGroup });
    const commentTop = await Book.find({ _id: commentGroup });

    // const bookTop;

    res.status(200).json({
      success: true,
      msg: "성공",
      wishTop,
      readTop,
      commentTop
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default getCuration;
