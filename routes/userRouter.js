import express from "express";
import routes from "../routes";
import { getUser, signIn, updateUser, login } from "../controllers/userController";
import { checkToken } from "../secret/verify";

const userRouter = express.Router();

userRouter.get(routes.userDetail, getUser);
userRouter.post(routes.addUser, signIn);
userRouter.patch(routes.userDetail, updateUser);
userRouter.post(routes.userLogin, login);
userRouter.post("/check", checkToken, function(req, res, next) {
    res.status(200).json(req.user);
} );

export default userRouter;
