import Book from "../../models/Book";

const uploadBook = (req, res) => {
  const dt = new Date();
  const books = req.body.map(item => {
    item.createdAt = dt;
    item.updatedAt = dt;
    return item;
  });

  Book.collection.insertMany(books, { ordered: false }, function(err, result) {
    if (err) {
      res.status(400).send({ success: false, msg: err });
    } else {
      Book.find({ createdAt: dt }, function(err, doc) {
        if (err) res.status(400).send(err);
        console.log(doc);
      });
      res.status(200).send({ success: true, msg: "성공!!", result: result });
    }
  });
};

export default uploadBook;
