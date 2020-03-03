import User from "../../models/User";

const updateUser = async (req, res) => {
  const {
    params: { googleId, nickname }
  } = req;

  User.updateOne({ googleId: googleId }, { nickname: nickname }, err => {
    if (!err) {
      res.status(200).json("Successfully updated selected name.");
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default updateUser;
