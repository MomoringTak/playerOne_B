import express from "express";
import routes from "../routes";
import {
  getUser,
  googleSignIn,
  updateUser,
  wtbSignUp,
  wtbSignIn,
  deleteUser,
  userComment
} from "../controllers/userController";
import { checkToken } from "../secret/verify";

const userRouter = express.Router();

userRouter.get(routes.userDetail, checkToken, getUser);
userRouter.post(routes.googleSignIn, googleSignIn);
userRouter.patch(routes.patchUser, updateUser);
userRouter.delete(routes.deleteUser, deleteUser);
userRouter.post(routes.wtbSignIn, wtbSignIn);
userRouter.post(routes.wtbSignUp, wtbSignUp);
userRouter.get(routes.userComment, userComment);

//Need to be Refactored
userRouter.post("/check", checkToken, function(req, res, next) {
  res.status(200).json(req.user);
});

export default userRouter;
