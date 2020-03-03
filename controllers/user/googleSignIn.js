import User from "../../models/User";
import { createToken } from "../../secret/verify";

const googleSignIn = async (req, res) => {
  const {
    body: { googleId, name, email }
  } = req;

  console.log(googleId);
  console.log(name);
  console.log(email);

  User.findOrCreate(
    { googleId: googleId },
    { nickname: name, email: email },
    (err, click, created) => {
      if (!err) {
        const user = {
          email: email,
          nickname: name,
          googleId: googleId
        }

        res.status(200).json({ success: true, msg: "Success", id_token: createToken(user) });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
};

export default googleSignIn;
