"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkToken = checkToken;
exports.createToken = createToken;

var _lodash = _interopRequireDefault(require("lodash"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function checkToken(req, res, next) {
  //const token = req.headers['x-access-token'];
  var token = req.get('Authorization').toString().replace("Bearer ", "");

  _jsonwebtoken["default"].verify(token, _config["default"].secretKey, function (err, decoded) {
    if (err) res.status(401).send({
      success: false,
      err: err
    });else {
      req.user = decoded;
      console.log(req.user);
      next();
    }
  });
}

function createToken(user) {
  // 'password' 정보는 제외 시키고 jwt 토큰 생성
  return _jsonwebtoken["default"].sign(_lodash["default"].omit(user, ['password']), _config["default"].secretKey
  /*, { expiresIn: 60*60*5 }*/
  );
}