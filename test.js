const axios = module.require("axios");

const api = axios.create({
  baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
  headers: {
    "X-Naver-Client-id": "6H7Ziz2RYe9uqckrEwAW",
    "X-Naver-Client-Secret": "Q_8KZebCX7"
  }
});

const getBook = () => api.get("", { params: { d_titl: "남자", display: 10 } });

async function done() {
  let { data } = await getBook();
  console.log(data.items);
}

done();
