import express from "express";
import routes from "../routes";
import { getUser, googleSignIn, updateUser, wtbSignIn } from "../controllers/userController";
import { checkToken } from "../secret/verify";

const userRouter = express.Router();

userRouter.get(routes.userDetail, getUser);
userRouter.post(routes.addUser, googleSignIn);
userRouter.patch(routes.userDetail, updateUser);
userRouter.post(routes.userLogin, wtbSignIn);
userRouter.post("/check", checkToken, function(req, res, next) {
    res.status(200).json(req.user);
} );

export default userRouter;
