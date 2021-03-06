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

var getAllReadLog = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var logData, Scores, doneReading, _iterator, _step, item, logDataResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            logData = req.body;
            _context.prev = 1;
            doneReading = 0;
            _iterator = _createForOfIteratorHelper(logData);
            _context.prev = 4;

            _iterator.s();

          case 6:
            if ((_step = _iterator.n()).done) {
              _context.next = 14;
              break;
            }

            item = _step.value;
            _context.next = 10;
            return _ReadLogger["default"].findOne({
              book: item.book,
              user: item.user
            });

          case 10:
            logDataResult = _context.sent;

            if (logDataResult.doneReading === true) {
              doneReading++;
            }

          case 12:
            _context.next = 6;
            break;

          case 14:
            _context.next = 19;
            break;

          case 16:
            _context.prev = 16;
            _context.t0 = _context["catch"](4);

            _iterator.e(_context.t0);

          case 19:
            _context.prev = 19;

            _iterator.f();

            return _context.finish(19);

          case 22:
            Scores = {
              doneReading: doneReading
            };
            res.status(200).json({
              success: true,
              msg: "성공",
              Scores: Scores
            });
            _context.next = 29;
            break;

          case 26:
            _context.prev = 26;
            _context.t1 = _context["catch"](1);
            res.status(400).json({
              success: false,
              msg: _context.t1
            });

          case 29:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 26], [4, 16, 19, 22]]);
  }));

  return function getAllReadLog(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = getAllReadLog;
exports["default"] = _default;