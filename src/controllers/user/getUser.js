import User from "../../models/User";

const getUser = async (req, res) => {
  const {
    user: { email }
  } = req;
  try {
    const user = await User.findOne({ email: email });
    res.status(200).json({ user, success: true, msg: "Success" });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default getUser;
