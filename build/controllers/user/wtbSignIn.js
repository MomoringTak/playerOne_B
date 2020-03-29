"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _verify = require("../../secret/verify");

var _bcryptNodejs = _interopRequireDefault(require("bcrypt-nodejs"));

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var wtbSignIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, password, user, userResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, password = _req$body.password;
            user = req.body;
            console.log(email, password);
            _context.prev = 3;
            _context.next = 6;
            return _User["default"].findOne({
              email: email,
              password: password
            });

          case 6:
            userResult = _context.sent;
            console.log(userResult);
            res.status(201).send({
              success: true,
              msg: "성공",
              id_token: (0, _verify.createToken)(user),
              userResult: userResult
            }); // if (userResult.length !== undefined)
            //   res.status(201).send({
            //     success: true,
            //     msg: "성공",
            //     id_token: createToken(user),
            //     userResult
            //   });
            // else {
            //   res.status(400).json({
            //     success: false,
            //     msg: "매칭되는 유저 정보가 아닙니다"
            //   });
            // }

            _context.next = 15;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](3);
            console.log(_context.t0);
            res.status(401).json({
              msg: _context.t0,
              success: false
            });

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[3, 11]]);
  }));

  return function wtbSignIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = wtbSignIn;
exports["default"] = _default;