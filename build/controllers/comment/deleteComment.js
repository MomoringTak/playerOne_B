"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _Comment = _interopRequireDefault(require("../../models/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var deleteComment = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$query, id, bookId, commentResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$query = req.query, id = _req$query.id, bookId = _req$query.bookId;
            _context.prev = 1;
            _context.next = 4;
            return _Comment["default"].deleteOne({
              uuid: id
            });

          case 4:
            _context.next = 6;
            return _Comment["default"].find({
              book: bookId
            }).populate({
              path: "user",
              model: "User"
            });

          case 6:
            commentResult = _context.sent;
            res.status(200).json({
              success: true,
              msg: "성공",
              commentResult: commentResult
            });
            _context.next = 13;
            break;

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            res.status(400).json({
              success: false,
              msg: _context.t0
            });

          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function deleteComment(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = deleteComment;
exports["default"] = _default;