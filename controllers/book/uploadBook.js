import Book from "../../models/Book";

//수정 매우 필요.
const uploadBook = async (req, res) => {
  const { body: books } = req;

  try {
    const newBookResult = await Book.create(books);
    res.status(200).send({ success: true, msg: "성공", newBookResult });
  } catch (err) {
    res.status(400).send({ success: false, msg: err });
  }

  // //몽고디비 콜렉션 사용 로직. 추가된 책들을 검열을 위해 작성된 로직이라고 알고있음.
  // //방법을 강구해서 교체해야됨.
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
