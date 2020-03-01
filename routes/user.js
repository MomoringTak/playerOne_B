import express from "express";
import routes from "../routes";
import User from "../models/User";
import { getUser, signIn, updateUser } from "../controllers/userController";

const userRouter = express.Router();

userRotuer.get(routes.userDetail, getUser);
userRotuer.post(routes.addUser, signIn);
userRotuer.patch(routes.userDetail, updateUser);

export default userRouter;
