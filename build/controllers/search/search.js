"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Book = _interopRequireDefault(require("../../models/Book"));

var _BookList = _interopRequireDefault(require("../../models/BookList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var search = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var keyword, books, booklist;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            keyword = req.query.keyword;
            _context.prev = 1;
            _context.next = 4;
            return _Book["default"].find({
              $text: {
                $search: keyword
              }
            });

          case 4:
            books = _context.sent;
            _context.next = 7;
            return _BookList["default"].find({
              $text: {
                $search: keyword
              }
            }).populate({
              path: "books",
              model: "Book",
              select: ["image", "title", "author", "publisher"]
            });

          case 7:
            booklist = _context.sent;
            res.status(200).json({
              success: true,
              msg: "성공!",
              books: books,
              booklist: booklist
            });
            _context.next = 14;
            break;

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](1);
            res.status(400).send({
              success: false,
              msg: _context.t0
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 11]]);
  }));

  return function search(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = search;
exports["default"] = _default;