import User from "../../models/User";
import { createToken } from "../../secret/verify";

const googleSignIn = async (req, res) => {
  const {
    body: { googleId, name, email }
  } = req;

  const { body: user } = req;

  try {
    await User.findOrCreate(
      { googleId: googleId },
      { nickname: name, email: email }
    );

    res
      .status(200)
      .json({ success: true, msg: "Success", id_token: createToken(user) });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false });
  }
};

export default googleSignIn;
