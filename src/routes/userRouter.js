import express from "express";
import routes from "../routes";
import {
  getUser,
  googleSignIn,
  updateUser,
  wtbSignUp,
  wtbSignIn,
  deleteUser,
  userComment,
  updateGoogleUser,
  getUserMyPage
} from "../controllers/userController";
import { checkToken } from "../secret/verify";
import {
  recordRead,
  getReadLogger,
  handleDoneRead,
  getAllWish
} from "../controllers/readLoggerController";

const userRouter = express.Router();

userRouter.get(routes.userDetail, checkToken, getUser);
userRouter.post(routes.googleSignIn, googleSignIn);
userRouter.post(routes.googleDetail, updateGoogleUser);
userRouter.patch(routes.patchUser, updateUser);
userRouter.delete(routes.deleteUser, deleteUser);
userRouter.post(routes.wtbSignIn, wtbSignIn);
userRouter.post(routes.wtbSignUp, wtbSignUp);
userRouter.post(routes.userWishlist, recordRead);
userRouter.post(routes.userRead, handleDoneRead);
userRouter.post(routes.getReadLogger, getReadLogger);

userRouter.get(routes.getUserMyPage, getUserMyPage);

//Need to be Refactored
userRouter.post("/check", checkToken, function(req, res, next) {
  res.status(200).json(req.user);
});

export default userRouter;
