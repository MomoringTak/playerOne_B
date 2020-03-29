"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _cheerio = _interopRequireDefault(require("cheerio"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

_dotenv["default"].config();

var UNDEFINED = "undefined"; //네이버 검색 API

var api = _axios["default"].create({
  baseURL: "https://openapi.naver.com/v1/search/book_adv.json",
  headers: {
    "X-Naver-Client-id": process.env.NAVER_CLIENTID,
    "X-Naver-Client-Secret": process.env.NAVER_SECRET
  }
}); //네이버 책 API에 검색 키워드 콜


var getNaverBook = function getNaverBook(title, display) {
  return api.get("", {
    params: {
      d_titl: title,
      display: display
    }
  });
}; //각 책들 링크에 기재되있는 제일 큰 카테고리 [예시) 소설->장르소설->추리 에서 소설


var getCategory = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(URL) {
    var html, $, data, category;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _axios["default"].get(URL);

          case 3:
            html = _context.sent;
            _context.next = 6;
            return _cheerio["default"].load(html.data);

          case 6:
            $ = _context.sent;
            data = {};
            $("ul.history").each(function (i, elem) {
              data = {
                container: $(elem).find("li").text().trim()
              };
            });

            if (!(data.container === undefined)) {
              _context.next = 13;
              break;
            }

            return _context.abrupt("return", UNDEFINED);

          case 13:
            category = data.container.replace(/\t|\n|>/g, "").split(" ");
            return _context.abrupt("return", category[0]);

          case 15:
            _context.next = 20;
            break;

          case 17:
            _context.prev = 17;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 17]]);
  }));

  return function getCategory(_x) {
    return _ref.apply(this, arguments);
  };
}();

var addGenre = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(books) {
    var arrayPromises;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            arrayPromises = books.map(function (item) {
              return getCategory(item.link);
            });
            _context2.next = 3;
            return Promise.all(arrayPromises).then(function (categories) {
              var i = 0;

              var _iterator = _createForOfIteratorHelper(books),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var book = _step.value;
                  book.category = categories[i];
                  i++;
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });

          case 3:
            return _context2.abrupt("return", books);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function addGenre(_x2) {
    return _ref2.apply(this, arguments);
  };
}();

var getBook = function getBook(req, res) {
  var _req$params = req.params,
      title = _req$params.title,
      display = _req$params.display;

  var showBook = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(title, display) {
      var _yield$getNaverBook, data, bookResult;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return getNaverBook(title, display);

            case 3:
              _yield$getNaverBook = _context3.sent;
              data = _yield$getNaverBook.data;
              _context3.next = 7;
              return addGenre(data.items);

            case 7:
              bookResult = _context3.sent;
              res.status(200).json(bookResult);
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              res.status(400).json({
                success: false,
                msg: _context3.t0
              });

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function showBook(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  showBook(title, display);
};

var _default = getBook;
exports["default"] = _default;