import express from "express";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/index";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(cors()); //add cors
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true })); //false ==> true
app.use(cookieParser());

app.use("/", router);

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
