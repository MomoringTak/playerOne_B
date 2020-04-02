import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//localhost REst API server
const url = "mongodb://localhost:27017/wtb";

//heroku Rest API server
//QA끝나시면 아래 mongoose.connect(url, ) 이부분 커멘트 처리하시고 아래 production 커멘트 푸시면 됩니다... ㅎㅎㅎ
//production development 동시에 처리하는 방법 알아보다가.. 실패....

//production용 REstAPI
// mongoose.connect(process.env.MONGO_URL, {
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.once("open", _ => {
  console.log("Database connected:", url);
});

// db.once("open", _ => {
//   console.log("Database connected:", process.env.MONGO_URL);
// });

db.on("error", err => {
  console.error("connection error:", err);
});

export default db;

//process.env.PROUDCTION ? process.env.MONGO_URL : url
// console.log(process.env.MONGO_URL);
