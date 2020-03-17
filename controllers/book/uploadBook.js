import Book from "../../models/Book";
import ReadLogger from "../../models/ReadLogger";

//수정 매우 필요.
const uploadBook = async (req, res) => {
  const {
    body: { newBook: books, user }
  } = req;

  // console.log(user);

  try {
    const newBookResult = await Book.create(books);
    // for (let item of newBookResult) {
    //   item.user = user;
    // }
    const newLogger = newBookResult.map(item => {
      const logger = {
        book: item._id,
        user: user,
        wish: false
      };
      return logger;
    });

    await ReadLogger.create(newLogger);

    res.status(200).send({ success: true, msg: "성공", newBookResult });
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }

  // 몽고디비 콜렉션 사용 로직. 추가된 책들을 검열을 위해 작성된 로직이라고 알고있음.
  // 방법을 강구해서 교체해야됨.
  // ordered: false 라는 옵션을 추가하여 순서 배열 상관 없이 생성.
  // Book.collection.insertMany(books, { ordered: false }, function(err, result) {
  //   if (err) {
  //     res.status(400).send({ success: false, msg: err });
  //   } else {
  //     Book.find({ createdAt: dt }, function(err, doc) {
  //       if (err) res.status(400).send(err);
  //     });
  //     res.status(200).send({ success: true, msg: "성공!!", result: result });
  //   }
  // });
};

export default uploadBook;
