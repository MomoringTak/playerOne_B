//Dependencies
import express from "express";

const globalRouter = express.Router();

/// Method: Get, Route '/'
globalRouter.get("/", function(req, res, next) {
  // res.status(200).send("index page");
  res.json(`index page`);
});

export default globalRouter;
