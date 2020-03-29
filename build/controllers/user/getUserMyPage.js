"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReadLogger = _interopRequireDefault(require("../../models/ReadLogger"));

var _Comment = _interopRequireDefault(require("../../models/Comment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getUserMyPage = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userId, userCommentResult, MyLogger, wishData, readData, totalWish, totalRead, _iterator, _step, item, wishBook, _iterator2, _step2, _item, readBook;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _Comment["default"].find({
              user: userId
            }).populate({
              path: "book",
              model: "Book"
            }).populate({
              path: "user",
              model: "User"
            });

          case 4:
            userCommentResult = _context.sent;
            _context.next = 7;
            return _ReadLogger["default"].find({
              user: userId
            }).populate({
              path: "book",
              model: "Book"
            });

          case 7:
            MyLogger = _context.sent;
            wishData = MyLogger.filter(function (data) {
              return data.wish === true;
            });
            readData = MyLogger.filter(function (data) {
              return data.doneReading === true;
            });
            totalWish = [];
            totalRead = [];
            _iterator = _createForOfIteratorHelper(wishData);
            _context.prev = 13;

            _iterator.s();

          case 15:
            if ((_step = _iterator.n()).done) {
              _context.next = 23;
              break;
            }

            item = _step.value;
            _context.next = 19;
            return _ReadLogger["default"].find({
              book: item.book._id,
              wish: true
            });

          case 19:
            wishBook = _context.sent;
            totalWish = [].concat(_toConsumableArray(totalWish), [wishBook.length]);

          case 21:
            _context.next = 15;
            break;

          case 23:
            _context.next = 28;
            break;

          case 25:
            _context.prev = 25;
            _context.t0 = _context["catch"](13);

            _iterator.e(_context.t0);

          case 28:
            _context.prev = 28;

            _iterator.f();

            return _context.finish(28);

          case 31:
            _iterator2 = _createForOfIteratorHelper(readData);
            _context.prev = 32;

            _iterator2.s();

          case 34:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 42;
              break;
            }

            _item = _step2.value;
            _context.next = 38;
            return _ReadLogger["default"].find({
              book: _item.book._id,
              doneReading: true
            });

          case 38:
            readBook = _context.sent;
            totalRead = [].concat(_toConsumableArray(totalRead), [readBook.length]);

          case 40:
            _context.next = 34;
            break;

          case 42:
            _context.next = 47;
            break;

          case 44:
            _context.prev = 44;
            _context.t1 = _context["catch"](32);

            _iterator2.e(_context.t1);

          case 47:
            _context.prev = 47;

            _iterator2.f();

            return _context.finish(47);

          case 50:
            res.status(200).json({
              success: true,
              msg: "성공",
              userCommentResult: userCommentResult,
              wishData: wishData,
              readData: readData,
              totalRead: totalRead,
              totalWish: totalWish
            });
            _context.next = 57;
            break;

          case 53:
            _context.prev = 53;
            _context.t2 = _context["catch"](1);
            console.log(_context.t2);
            res.status(400).json({
              success: false,
              msg: _context.t2
            });

          case 57:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 53], [13, 25, 28, 31], [32, 44, 47, 50]]);
  }));

  return function getUserMyPage(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getUserMyPage;
exports["default"] = _default;