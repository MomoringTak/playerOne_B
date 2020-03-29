"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

var _verify = require("../../secret/verify");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var googleSignIn = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, googleId, name, email, user, userResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, googleId = _req$body.googleId, name = _req$body.name, email = _req$body.email;
            user = req.body;
            _context.prev = 2;
            _context.next = 5;
            return _User["default"].findOrCreate({
              googleId: googleId
            }, {
              nickname: name,
              email: email
            });

          case 5:
            userResult = _context.sent;
            res.status(200).json({
              success: true,
              msg: "Success",
              id_token: (0, _verify.createToken)(user),
              userResult: userResult
            });
            _context.next = 12;
            break;

          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](2);
            res.status(400).json({
              success: false,
              msg: _context.t0
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 9]]);
  }));

  return function googleSignIn(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = googleSignIn;
exports["default"] = _default;