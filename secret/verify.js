import _ from "lodash";
import jwt from "jsonwebtoken";
import config from "./config";

function checkToken(req, res, next) {
    //const token = req.headers['x-access-token'];
    const token = req.get('Authorization').toString().replace("Bearer ", "");
    jwt.verify(token, config.secretKey, (err, decoded) => {
        if(err) res.status(401).send({ success: false, err: err});
        else { 
            req.user = decoded;
            console.log(req.user);
            next();
        }
    })
}

function createToken(user) {
    // 'password' 정보는 제외 시키고 jwt 토큰 생성
    return jwt.sign(_.omit(user, ['password']), config.secretKey/*, { expiresIn: 60*60*5 }*/);
}

export { checkToken, createToken };