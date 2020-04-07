import express from "express";
import exec from "../router.exec";
import { user } from "../routeController";

const app = express();
const userRouter = new exec(app);

export default userRouter;
