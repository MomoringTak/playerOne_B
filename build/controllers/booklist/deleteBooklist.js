"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BookList = _interopRequireDefault(require("../../models/BookList"));

var _Book = _interopRequireDefault(require("../../models/Book"));

var _User = _interopRequireDefault(require("../../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteBookList = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, id, email, BookListDeleteResult, UserUpdateResult, BookUpdateResult, UserResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, id = _req$query.id, email = _req$query.email;
            _context.prev = 1;
            _context.next = 4;
            return _BookList["default"].deleteOne({
              _id: id
            });

          case 4:
            BookListDeleteResult = _context.sent;
            _context.next = 7;
            return _User["default"].updateOne({
              booklists: {
                $in: id
              }
            }, {
              $pull: {
                booklists: id
              }
            });

          case 7:
            UserUpdateResult = _context.sent;
            _context.next = 10;
            return _Book["default"].updateMany({
              booklists: {
                $in: id
              }
            }, {
              $pull: {
                booklists: id
              }
            });

          case 10:
            BookUpdateResult = _context.sent;
            _context.next = 13;
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

          case 13:
            UserResult = _context.sent;
            res.status(200).json({
              success: true,
              msg: "Success",
              booklist: UserResult
            });
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              success: false,
              msg: _context.t0
            });

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 17]]);
  }));

  return function deleteBookList(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = deleteBookList;
exports["default"] = _default;