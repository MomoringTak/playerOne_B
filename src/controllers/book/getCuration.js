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
    const id = "5e85ae55e1739f624c8cf293";
    const givenUser = await User.findById(id);
    const ageTop = await User.find()
      //   .where("id")
      //   .ne(givenUser_id)
      .where("age")
      .gte(givenUser.age - 5)
      .lte(givenUser.age + 5)
      .select("_id");

    //같은 _id 값들 하나의 Array로 묶어서 반환.
    //최선의 방법은 아님. 방법을 강구해야됨.
    const leftOne = ({ _id, ...rest }) => _id;

    const userCollection = ageTop.map(item => leftOne(item));

    const ageAllLogger = await ReadLogger.find()
      .where("user")
      .equals({ $in: userCollection })
      .where("wish")
      .equals(true)
      .select("book");

    const bookCollection = ageAllLogger.map(item => leftOne(item));

    //   .sort({ createAt: "desc" })
    //   .limit(8);

    //   .sort({ createAt: "desc" });

    // const wishTop;
    // const readTop;
    // const commentTop;
    // const bookTop;
    res.status(200).json({ success: true, msg: "성공", bookCollection });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: true, msg: err });
  }
};

export default getCuration;
