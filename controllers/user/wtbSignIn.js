import { createToken } from "../../secret/verify";
import bcrypt from "bcrypt-nodejs";
import User from "../../models/User";

const wtbSignIn = async (req, res) => {
  const {
    body: { email, password }
  } = req;
  const { body: user } = req;

  console.log(email, password);
  try {
    const userResult = await User.findOne({ email: email, password: password });
    console.log(userResult);
    res.status(201).send({
      success: true,
      msg: "성공",
      id_token: createToken(user),
      userResult
    });
    // if (userResult.length !== undefined)
    //   res.status(201).send({
    //     success: true,
    //     msg: "성공",
    //     id_token: createToken(user),
    //     userResult
    //   });
    // else {
    //   res.status(400).json({
    //     success: false,
    //     msg: "매칭되는 유저 정보가 아닙니다"
    //   });
    // }
  } catch (err) {
    console.log(err);
    res.status(401).json({
      msg: err,
      success: false
    });
  }
};

export default wtbSignIn;
