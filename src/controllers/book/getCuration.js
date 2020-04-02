import User from "../../models/User";
import Comment from "../../models/Comment";
import ReadLogger from "../../models/Comment";
import BookList from "../../models/BookList";
import Book from "../../models/BookList";

const getCuration = async (req, res) => {
  const { body: userId } = req;

  /*
1. 유저 나이대에 좋아요 제일 많은 탑 8 
- 유저 나이 기준 +- 5 살 찾기 예시) 25살 - 20살 ~ 30살 유저
- 유저아이디 참조 모든 리드로거 찾기
- 최근 1주일동안 읽은 처리된 책으로 찾기 
- 좋아요 제일 많은거 출력 sorting 8개.


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
    const givenUser = User.findById(userId);
    const ageTop = User.find.where('age').gt(givenUser.age - 5).lt(givenUser.age + 5);
    


    const wishTop;
    const readTop;
    const commentTop;
    const bookTop;




  try {
    res.status(200).json({ success: true, msg: "성공" });
  } catch (err) {
    res.status(400).json({ success: true, msg: err });
  }
};

export default getCuration;
