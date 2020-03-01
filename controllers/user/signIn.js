import User from "../../models/User";

const signIn = async (req, res) => {
  User.findOrCreate(
    { googleId: req.body.googleId },
    { nickname: req.body.name, email: req.body.email },
    (err, click, created) => {
      if (!err) {
        res.status(200).json({ success: true, msg: "Success" });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
};

export default signIn;
