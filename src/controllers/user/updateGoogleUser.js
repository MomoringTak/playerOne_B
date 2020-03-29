import User from "../../models/User";

const updateGoogleUser = async (req, res) => {
  const { body: userInfo } = req;

  try {
    await User.findByIdAndUpdate(userInfo.userId, {
      age: userInfo.age,
      gender: userInfo.gender
    });

    res.status(200).json({ success: true, msg: "성공" });
  } catch (err) {
    res.status(400).json({ success: false, msg: err });
  }
};

export default updateGoogleUser;
