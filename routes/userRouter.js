import express from "express";
import routes from "../routes";
import { getUser, signIn, updateUser } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, getUser);
userRouter.post(routes.addUser, signIn);
userRouter.patch(routes.userDetail, updateUser);

export default userRouter;
