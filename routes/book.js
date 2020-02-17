//Dependencies
import express from "express";
import axios from "axios";

const router = express.Router();

//네이버 검색 API
const api = axios.create({
    baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
    headers: {
        "X-Naver-Client-id": "6H7Ziz2RYe9uqckrEwAW",
        "X-Naver-Client-Secret": "Q_8KZebCX7"
    }
});


//주소가 요상한데.... params 만 넘기고 싶은데... /book 이렇게해서... ㅠㅠㅠㅠㅠ
//:title/:display 붙이지 않으면 왜 안받아지는지 ㅠㅠㅠㅠㅠㅠ 연구를 좀 더 해보겠습니다.
/// Method: Get, Route '/book/:title/:display' Example '/book/정약용/5'
router.get("/:title/:display", function (req, res) {
    const {
        params: {
            title: title,
            display: display
        }
    } = req;

    const getBook = (title, display) =>
        api.get("", {
            params: {
                d_titl: title,
                display: display
            }
        });

    async function showBook(title, display) {
        const {
            data
        } = await getBook(title, display);
        console.log(data.items);
        res.status(200).json(data.items);
    }

    showBook(title, display);
});

//router.post("/")


export default router;