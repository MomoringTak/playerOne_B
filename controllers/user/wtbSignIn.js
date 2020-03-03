import { createToken } from "../../secret/verify";
import bcrypt from "bcrypt-nodejs";

const wtbSignIn = async (req, res) => {
    const {
      body: { email, password }
    } = req;
  
    // console.log(googleId);
    // console.log(name);
    // console.log(email);
  
    // User.findOrCreate(
    //   { googleId: googleId },
    //   { nickname: name, email: email },
    //   (err, click, created) => {
    //     if (!err) {
    //       res.status(200).json({ success: true, msg: "Success" });
    //     } else {
    //       res.status(400).json({ success: false, msg: err });
    //     }
    //   }
    // );

    const user = {
        email: email,
        password: password
    }

    res.status(201).send({
        id_token: createToken(user)
    });

  };
  
  export default wtbSignIn;