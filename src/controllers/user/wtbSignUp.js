import User from "../../models/User";
import { createToken } from "../../secret/verify";

const wtbSignUp = async (req, res) => {
  const { body: userInfo } = req;

  const {
    body: { email }
  } = req;

  try {
    const userResult = await User.findOrCreate({ email: email }, userInfo);
    console.log(userResult);
    res.status(200).json({
      success: true,
      msg: "성공",
      id_token: createToken(userInfo),
      userResult
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({ success: false, msg: err });
  }
};

export default wtbSignUp;
