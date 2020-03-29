import BookList from "../../models/BookList";

const getOneBooklist = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const result = await BookList.findOne({ _id: id });
    res.status(200).json({ success: true, msg: "success", result });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getOneBooklist;
