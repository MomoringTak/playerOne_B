"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ReadLogger = _interopRequireDefault(require("../../models/ReadLogger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getBookWish = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var bookId, countBookStatus, readNum, wishNum, averageTime, averageDifficulty, _iterator, _step, item, maxTime, maxDifficulty;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            bookId = req.params.id;
            _context.prev = 1;
            _context.next = 4;
            return _ReadLogger["default"].find({
              book: bookId
            });

          case 4:
            countBookStatus = _context.sent;
            readNum = countBookStatus.filter(function (item) {
              return item.doneReading === true;
            });
            wishNum = countBookStatus.filter(function (item) {
              return item.wish === true;
            });
            averageTime = {
              oneWeek: 0,
              twoWeek: 0,
              threeWeek: 0
            };
            averageDifficulty = {
              beginner: 0,
              intermediate: 0,
              professional: 0
            };
            _iterator = _createForOfIteratorHelper(readNum);
            _context.prev = 10;

            _iterator.s();

          case 12:
            if ((_step = _iterator.n()).done) {
              _context.next = 36;
              break;
            }

            item = _step.value;
            _context.t0 = item.time;
            _context.next = _context.t0 === 1 ? 17 : _context.t0 === 2 ? 19 : _context.t0 === 3 ? 21 : 23;
            break;

          case 17:
            averageTime.oneWeek++;
            return _context.abrupt("break", 24);

          case 19:
            averageTime.twoWeek++;
            return _context.abrupt("break", 24);

          case 21:
            averageTime.threeWeek++;
            return _context.abrupt("break", 24);

          case 23:
            return _context.abrupt("break", 24);

          case 24:
            _context.t1 = item.difficulty;
            _context.next = _context.t1 === 1 ? 27 : _context.t1 === 2 ? 29 : _context.t1 === 3 ? 31 : 33;
            break;

          case 27:
            averageDifficulty.beginner++;
            return _context.abrupt("break", 34);

          case 29:
            averageDifficulty.intermediate++;
            return _context.abrupt("break", 34);

          case 31:
            averageDifficulty.professional++;
            return _context.abrupt("break", 34);

          case 33:
            return _context.abrupt("break", 34);

          case 34:
            _context.next = 12;
            break;

          case 36:
            _context.next = 41;
            break;

          case 38:
            _context.prev = 38;
            _context.t2 = _context["catch"](10);

            _iterator.e(_context.t2);

          case 41:
            _context.prev = 41;

            _iterator.f();

            return _context.finish(41);

          case 44:
            maxTime = Object.keys(averageTime).reduce(function (a, b) {
              return averageTime[a] > averageTime[b] ? a : b;
            });
            maxDifficulty = Object.keys(averageDifficulty).reduce(function (a, b) {
              return averageDifficulty[a] > averageDifficulty[b] ? a : b;
            });
            res.status(200).json({
              success: true,
              msg: "성공",
              wishNumber: wishNum.length,
              readNumber: readNum.length,
              maxTime: maxTime,
              maxDifficulty: maxDifficulty,
              averageTime: averageTime,
              averageDifficulty: averageDifficulty
            });
            _context.next = 53;
            break;

          case 49:
            _context.prev = 49;
            _context.t3 = _context["catch"](1);
            console.log(_context.t3);
            res.status(400).json({
              success: false,
              msg: _context.t3
            });

          case 53:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 49], [10, 38, 41, 44]]);
  }));

  return function getBookWish(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getBookWish;
exports["default"] = _default;