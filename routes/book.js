//Dependencies
import express from "express";
import axios from "axios";
import Book from "../models/Book";
import db from "../db/db";

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

router.post("/", function (req, res) {

    const dt = new Date();
    const books = req.body.map(item => {
        item.createdAt = dt;
        item.updatedAt = dt;
        return item;
    });

    Book.collection.insertMany(books, { ordered: false }, function (err, book) {
        if (err) {
            res.status(400).send({success:false, msg: err});
        } else {
            //console.log((Book.findOne({createdAt:dt}.exec(function(){}))));
            Book.find({createdAt:dt}, function(err, doc){
                if(err) res.status(400).send(err);
                console.log(doc);
            })
            res.status(200).send({ success:true, msg:"성공!!", books: book });
        }
    });
    
    /*
        const newTest = Test.Test({
            content: {
              title: req.body.title,
              description: req.body.description
            },
            tag: tag
          });
        
          newTest.save(function(err) {
            if (!err)
              res.json({ success: true, msg: "Successfully added a new test!" });
            else res.json({ success: false, msg: err });
          });


    // title: "아버지 정약용의 인생강의 (다산은 아들을 이렇게 가르쳤다)"
    // link: "http://book.naver.com/bookdb/book_detail.php?bid=16122364"
    // image: "https://bookthumb-phinf.pstatic.net/cover/161/223/16122364.jpg?type=m1&udate=20200118"
    // author: "정약용"
    // price: "15800"
    // discount: "14220"
    // publisher: "홍익출판사"
    // pubdate: "20200115"
    // isbn: "897065786X 9788970657868"
    // description: "다산 정약용이 유배지에서 두 아들을 위해 붓을 들었다↵“어떻게 살 것인가”라는 젊은이들의 질문에 다산이 답하다!다산 정약용이 유배길을 떠나던 1801년, 그의 큰아들 학연은 19세였고 둘째 아들 학유는 16세였다. 당대 최고의 학자였던 아버지 정약용은 두 아들에게 가르칠 것이 많았다. 다산은 천리 밖... "
    // selected: true
        
        const {
            params: {
                title: title,
                display: display
            }
        } = req;

        
        */
});


export default router;