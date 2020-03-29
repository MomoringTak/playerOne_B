"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _BookList = _interopRequireDefault(require("../../models/BookList"));

var _Book = _interopRequireDefault(require("../../models/Book"));

var _User = _interopRequireDefault(require("../../models/User"));

var _ReadLogger = _interopRequireDefault(require("../../models/ReadLogger"));

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

var uploadBooklist = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var userId, newBookList, bookListCreateResult, bookUpdateResult, logData, _iterator, _step, book, logger, _i, _logData, log, RegisterNewLooger, userUpdateResult;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            userId = req.body.userId;
            newBookList = req.body;
            _context.prev = 2;
            _context.next = 5;
            return _BookList["default"].create(newBookList);

          case 5:
            bookListCreateResult = _context.sent;
            _context.next = 8;
            return _Book["default"].updateMany({
              _id: {
                $in: bookListCreateResult.books
              }
            }, {
              $push: {
                booklists: bookListCreateResult._id
              }
            });

          case 8:
            bookUpdateResult = _context.sent;
            logData = [];
            _iterator = _createForOfIteratorHelper(newBookList.books);

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                book = _step.value;
                logger = {
                  book: book,
                  user: newBookList.userId,
                  wish: false,
                  doneReading: false
                };
                logData = [].concat(_toConsumableArray(logData), [logger]);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            _i = 0, _logData = logData;

          case 13:
            if (!(_i < _logData.length)) {
              _context.next = 21;
              break;
            }

            log = _logData[_i];
            _context.next = 17;
            return _ReadLogger["default"].findOrCreate(log);

          case 17:
            RegisterNewLooger = _context.sent;

          case 18:
            _i++;
            _context.next = 13;
            break;

          case 21:
            _context.next = 23;
            return _User["default"].update({
              _id: {
                $in: userId
              }
            }, {
              $push: {
                booklists: bookListCreateResult._id
              }
            });

          case 23:
            userUpdateResult = _context.sent;
            res.status(200).json({
              success: true,
              msg: "Success",
              bookList: bookListCreateResult,
              result: bookUpdateResult,
              user: userUpdateResult
            });
            _context.next = 31;
            break;

          case 27:
            _context.prev = 27;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);
            res.status(400).json({
              success: false,
              msg: _context.t0
            });

          case 31:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 27]]);
  }));

  return function uploadBooklist(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var _default = uploadBooklist;
exports["default"] = _default;