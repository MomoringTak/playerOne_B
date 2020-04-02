import User from "../../models/User";
import Comment from "../../models/Comment";
import ReadLogger from "../../models/ReadLogger";
import BookList from "../../models/BookList";
import Book from "../../models/BookList";

const getCuration = async (req, res) => {
  const { body: userId } = req;

  /*
1. 유저 나이대에 좋아요 제일 많은 탑 8 
- 유저 나이 기준 +- 5 살 찾기 예시) 25살 - 20살 ~ 30살 유저들
- 나이 범위 유저아이디들과 좋아요(wish) ture인 리드로거 찾기
- 북이 제일 중복되는 모델 추리기 해당 북의 숫자에 따른 Max to Min Sorting 내림차
- 
- //최근 1주일동안 읽은 처리된 책으로 찾기 


2. 리딩이 제일많은 탑 8
- 최근 1주일 한으로 데이터 필터링 
- 리드로거에서 doneReading 값이 제일 높은 탑 8 sorting

3. 좋아요 제일많은 탑 8 
- 최근 1주일 한으로 데이터 필터링 
- 리드로거에서 wish 값 제일 높은 탑 8 sorting


4. 댓글이 제일많은 탑 8
- 최근 1주일 한으로 데이터 필터링 
- Comment 모델에서 중복되있는 북아이디 탑 8


5. 북리스트에 공통적으로 자주 등록되는 탑 8
- 최근 1주일 한으로 데이터 필터링 
- Booklist에서 BookId가 제일 많이 포함되는 책 탑8

    */
  try {
    let ageTopLike = [];
    const id = "5e862397d700d23844efda79";
    const givenUser = await User.findById(id);

    //유저 나이 플마 5살 범위 검색
    const ageTop = await User.find()
      //   .where("id")
      //   .ne(givenUser_id)
      .where("age")
      .gte(givenUser.age - 5)
      .lte(givenUser.age + 5)
      .select("_id");

    //ageTop 유저아이디 객체배열 -> userCollection 배열에 짚어넢음
    const userCollection = ageTop.map(item => item._id);

    //유저들이 가지고있는 리드로거 모델에서 wish가 true인 docs를 찝고 내림차순으로 정렬. limit은 2000개로제한.
    const ageAllLogger = await ReadLogger.find()
      .where("user")
      .equals({ $in: userCollection })
      .where("wish")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .limit(2000);

    //같은 책 중복제거 아이디만 가져옴.
    const uniqueBook = await ReadLogger.find()
      .where("user")
      .equals({ $in: userCollection })
      .where("wish")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .distinct("book");

    //각 책마다 가지고 있는 좋아요 수 종합
    let countCollection = [];
    for (let item of uniqueBook) {
      const countVal = await ReadLogger.count()
        .where("book")
        .equals(item)
        .where("wish")
        .equals(true);

      countCollection = [...countCollection, { book: item, wishNum: countVal }];
    }

    //카운트된 좋아요 내림차순으로 정렬
    countCollection.sort((a, b) => {
      return a.wishNum > b.wishNum ? -1 : a.wishNum < b.wishNum ? 1 : 0;
    });

    //탑 8개 책 아이디들 -> apteTopLike 배열에 추가
    for (let i = 0; i < 8; i++) {
      if (countCollection[i] !== undefined)
        ageTopLike = [...ageTopLike, countCollection[i].book];
    }

    /////////////////////////////////////////////////////////////////////////
    let ageTopRead = [];

    //유저들이 가지고있는 리드로거 모델에서 wish가 true인 docs를 찝고 내림차순으로 정렬. limit은 2000개로제한.
    const ageReadAllLogger = await ReadLogger.find()
      .where("user")
      .equals({ $in: userCollection })
      .where("doneReading")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .limit(2000);

    //같은 책 중복제거 아이디만 가져옴.
    const uniqueReadBook = await ReadLogger.find()
      .where("user")
      .equals({ $in: userCollection })
      .where("doneReading")
      .equals(true)
      .select("book createdAt")
      .sort({ createdAt: "desc" })
      .distinct("book");

    //각 책마다 가지고 있는 좋아요 수 종합
    let countReadCollection = [];

    for (let item of uniqueReadBook) {
      const countVal = await ReadLogger.count()
        .where("book")
        .equals(item)
        .where("doneReading")
        .equals(true);

      countReadCollection = [
        ...countReadCollection,
        { book: item, readNum: countVal }
      ];
    }

    //카운트된 좋아요 내림차순으로 정렬
    countReadCollection.sort((a, b) => {
      return a.readNum > b.readNum ? -1 : a.readNum < b.readNum ? 1 : 0;
    });

    //탑 8개 책 아이디들 -> apteTopLike 배열에 추가
    for (let i = 0; i < 8; i++) {
      if (countReadCollection[i] !== undefined)
        ageTopRead = [...ageTopRead, countReadCollection[i].book];
    }
    ///////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////
    // 종합
    //해당 유저 나이 범위 탑 좋아요 책아이디들 책 모델에서 조회.
    const ageTopLikeBook = await Book.find({ _id: { $in: ageTopLikeBook } });
    const ageTopReadBook = await Book.find({ _id: { $in: ageTopRead } });

    // const wishTop;
    // const readTop;
    // const commentTop;
    // const bookTop;
    res
      .status(200)
      .json({ success: true, msg: "성공", ageTopLikeBook, ageTopReadBook });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: true, msg: err });
  }
};

export default getCuration;
