import User from "../../models/User";

const updateUser = async (req, res) => {
  const {
    body: { email, nickname }
  } = req;

  try {
    await User.updateOne({ email: email }, { nickname: nickname });
    res.status(200).json("Successfully updated selected name.");
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default updateUser;