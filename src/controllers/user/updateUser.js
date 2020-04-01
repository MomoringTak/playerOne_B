import User from "../../models/User";

const updateUser = async (req, res) => {
  const {
    body: { email, nickname }
  } = req;

  try {
    await User.updateOne({ email: email }, { nickname: nickname });
    res.status(200).json({ success: true, msg: "업데이트 성공" });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default updateUser;
