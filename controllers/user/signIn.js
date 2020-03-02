import User from "../../models/User";

const signIn = async (req, res) => {
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
        res.status(200).json({ success: true, msg: "Success" });
      } else {
        res.status(400).json({ success: false, msg: err });
      }
    }
  );
};

export default signIn;
