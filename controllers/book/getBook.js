import axios from "axios";

//네이버 검색 API
const api = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
  headers: {
    "X-Naver-Client-id": "6H7Ziz2RYe9uqckrEwAW",
    "X-Naver-Client-Secret": "Q_8KZebCX7"
  }
});

const getBook = (req, res) => {
  const {
    params: { title, display }
  } = req;

  const getBook = (title, display) =>
    api.get("", {
      params: {
        d_titl: title,
        display: display
      }
    });

  const showBook = async (title, display) => {
    try {
      const { data } = await getBook(title, display);
      res.status(200).json(data.items);
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  };

  showBook(title, display);
};

export default getBook;