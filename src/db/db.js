import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

//process.env.PROUDCTION ? process.env.MONGO_URL : url

// console.log(process.env.MONGO_URL);

const url = "mongodb://localhost:27017/wtb";
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;
db.once("open", _ => {
  console.log("Database connected:", url);
});

db.on("error", err => {
  console.error("connection error:", err);
});

export default db;
