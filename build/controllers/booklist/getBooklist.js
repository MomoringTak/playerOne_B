"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getBooklist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var email, booklist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = req.query.email;
            _context.prev = 1;
            _context.next = 4;
            return _User["default"].findOne({
              email: email
            }).populate({
              path: "booklists",
              model: "BookList",
              populate: {
                path: "books",
                model: "Book",
                select: ["image", "title", "author", "publisher"]
              }
            });

          case 4:
            booklist = _context.sent;
            res.status(200).json({
              success: true,
              msg: "성공",
              booklist: booklist
            });
            _context.next = 11;
            break;

          case 8:
            _context.prev = 8;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              success: false,
              msg: _context.t0
            });

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 8]]);
  }));

  return function getBooklist(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getBooklist;
exports["default"] = _default;