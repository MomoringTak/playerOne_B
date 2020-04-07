import express from "express";
import exec from "../router.exec";
import { book } from "../routeController";

const app = express();
const bookRouter = new exec(app);

export default bookRouter;
