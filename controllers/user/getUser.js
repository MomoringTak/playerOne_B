import User from "../../models/User";

const getUser = async (req, res) => {
  // const {
  //   params: { googleId: googleId }
  // } = req;
  // console.log(req.user);

  User.findOne({ email: req.user.email }, (err, user) => {
    if (user) {
      res.status(200).json({ user: user, success: true, msg: "Success" });
    } else {
      res.status(400).json({ success: false, msg: err });
    }
  });
};

export default getUser;
