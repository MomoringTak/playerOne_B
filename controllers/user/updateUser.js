import User from "../../models/User";

const updateUser = async (req, res) => {
  const googleId = req.params.googleId;
  User.updateOne(
    { googleId: googleId },
    { nickname: req.body.nickname },
    err => {
      if (!err) {
        res.status(200).json("Successfully updated selected name.");
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
};

export default updateUser;
