import "@babel/polyfill";
import express from "express";
import db from "./db/db";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import logger from "morgan";

import routes from "./routes";
import globalRouter from "./routes/index";
import userRouter from "./routes/userRouter";
import bookRouter from "./routes/bookRouter";
import booklistRouter from "./routes/booklistRouter";
import commentRouter from "./routes/commentRouter";
import searchRouter from "./routes/searchRouter";

const app = express();

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.books, bookRouter);
app.use(routes.booklists, booklistRouter);
app.use(routes.comments, commentRouter);
app.use(routes.searchRoot, searchRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  console.log("404 error");
  var err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// development error handler
// will print stacktrace
if (app.get("env") === "development") {
  app.use(function(err, req, res, next) {
    console.log("500 error");
    res.status(err.status || 500);
    res.send({ message: err.message, error: err });
  });
} else {
  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    console.log("500 error");
    res.status(err.status || 500);
    res.send({ message: err.message, error: {} });
  });
}

export default app;
