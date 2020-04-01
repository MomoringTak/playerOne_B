import axios from "axios";
import cheerio from "cheerio";
import dotenv from "dotenv";

dotenv.config();

const UNDEFINED = "undefined";

//네이버 검색 API
const api = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
  headers: {
    "X-Naver-Client-id": process.env.NAVER_CLIENTID,
    "X-Naver-Client-Secret": process.env.NAVER_SECRET
  }
});

//네이버 책 API에 검색 키워드 콜
const getNaverBook = (title, display) =>
  api.get("", {
    params: {
      d_titl: title,
      display: display
    }
  });

//각 책들 링크에 기재되있는 제일 큰 카테고리 [예시) 소설->장르소설->추리 에서 소설
const getCategory = async URL => {
  try {
    const html = await axios.get(URL);
    const $ = await cheerio.load(html.data);

    let data = {};

    $("ul.history").each((i, elem) => {
      data = {
        container: $(elem)
          .find("li")
          .text()
          .trim()
      };
    });

    if (data.container === undefined) {
      return UNDEFINED;
    } else {
      let category = data.container.replace(/\t|\n|>/g, "").split(" ");
      return category[0].trim();
    }
  } catch (err) {
    console.log(err);
  }
};

const addGenre = async books => {
  const arrayPromises = books.map(item => getCategory(item.link));
  await Promise.all(arrayPromises).then(categories => {
    let i = 0;
    for (let book of books) {
      book.category = categories[i];
      i++;
    }
  });

  return books;
};

const getBook = (req, res) => {
  const {
    params: { title, display }
  } = req;

  const showBook = async (title, display) => {
    try {
      const { data } = await getNaverBook(title, display);

      const bookResults = await addGenre(data.items);

      res.status(200).json({ success: true, msg: "성공", bookResults });
    } catch (err) {
      res.status(400).json({ success: false, msg: err });
    }
  };

  showBook(title, display);
};

export default getBook;
