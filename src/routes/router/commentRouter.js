import express from "express";
import exec from "../router.exec";
import { comment } from "../routeController";

const app = express();
const commentRouter = new exec(app);

export default commentRouter;
