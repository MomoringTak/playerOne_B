import express from "express";
import exec from "../router.exec";
import { booklist } from "../routeController";

const app = express();
const booklisRouter = new exec(app);

export default booklisRouter;
