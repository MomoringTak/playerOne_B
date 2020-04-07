import express from "express";
import exec from "../router.exec";
import { home } from "../routeController";

const app = express();
const homeRouter = new exec(app);

export default homeRouter;
