import User from "../../models/User";

const deleteUser = async (req, res) => {
  const {
    params: { id }
  } = req;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ success: true, msg: "성공" });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default deleteUser;
