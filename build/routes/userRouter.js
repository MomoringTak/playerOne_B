"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _routes = _interopRequireDefault(require("../routes"));

var _userController = require("../controllers/userController");

var _verify = require("../secret/verify");

var _readLoggerController = require("../controllers/readLoggerController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var userRouter = _express["default"].Router();

userRouter.get(_routes["default"].userDetail, _verify.checkToken, _userController.getUser);
userRouter.post(_routes["default"].googleSignIn, _userController.googleSignIn);
userRouter.post(_routes["default"].googleDetail, _userController.updateGoogleUser);
userRouter.patch(_routes["default"].patchUser, _userController.updateUser);
userRouter["delete"](_routes["default"].deleteUser, _userController.deleteUser);
userRouter.post(_routes["default"].wtbSignIn, _userController.wtbSignIn);
userRouter.post(_routes["default"].wtbSignUp, _userController.wtbSignUp);
userRouter.post(_routes["default"].userWishlist, _readLoggerController.recordRead);
userRouter.post(_routes["default"].userRead, _readLoggerController.handleDoneRead);
userRouter.post(_routes["default"].getReadLogger, _readLoggerController.getReadLogger);
userRouter.get(_routes["default"].getUserMyPage, _userController.getUserMyPage); //Need to be Refactored

userRouter.post("/check", _verify.checkToken, function (req, res, next) {
  res.status(200).json(req.user);
});
var _default = userRouter;
exports["default"] = _default;