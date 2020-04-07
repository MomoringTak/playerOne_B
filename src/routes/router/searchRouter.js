import express from "express";
import exec from "../router.exec";
import { search } from "../routeController";

const app = express();
const searchRouter = new exec(app);

export default searchRouter;
