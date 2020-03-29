"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Book = _interopRequireDefault(require("../../models/Book"));

var _ReadLogger = _interopRequireDefault(require("../../models/ReadLogger"));

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//수정 매우 필요.
var uploadBook = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, books, user, newBookResult, newbieUpdate, newLogger;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, books = _req$body.newBook, user = _req$body.user;
            _context.prev = 1;
            _context.next = 4;
            return _Book["default"].create(books);

          case 4:
            newBookResult = _context.sent;
            _context.next = 7;
            return _User["default"].findByIdAndUpdate(user, {
              newbie: false
            });

          case 7:
            newbieUpdate = _context.sent;
            newLogger = newBookResult.map(function (item) {
              var logger = {
                book: item._id,
                user: user,
                wish: false,
                difficulty: item.difficulty,
                time: item.time
              };
              return logger;
            });
            _context.next = 11;
            return _ReadLogger["default"].create(newLogger);

          case 11:
            res.status(200).send({
              success: true,
              msg: "성공",
              newBookResult: newBookResult
            });
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(400).send({
              success: false,
              msg: _context.t0
            });

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 14]]);
  }));

  return function uploadBook(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = uploadBook;
exports["default"] = _default;