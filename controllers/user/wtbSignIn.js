import { createToken } from "../../secret/verify";
import bcrypt from "bcrypt-nodejs";
import User from "../../models/User";

const wtbSignIn = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  const { body: user } = req;

  try {
    const result = await User.find({ email: email, password: password });
    if (result.length >= 1)
      res
        .status(201)
        .send({ success: true, msg: "성공", id_token: createToken(user) });
    else {
      res.status(400).json({
        success: false,
        msg: "매칭되는 유저 정보가 아닙니다"
      });
    }
  } catch (err) {
    res.status(401).json({
      msg: err,
      success: false
    });
  }
};

export default wtbSignIn;
