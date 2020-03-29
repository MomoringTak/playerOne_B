"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
//Routes
//index.js
var HOME = "/"; ///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL
//user.js
//User

var USERS = "/users"; // GET

var USER_DETAIL = "/"; // PATCH USER

var PATCH_USER = "/update"; //POST new User or Find

var GOOGLE_SIGNIN = "/googleSignIn";
var GOOGLE_DETAIL = "/googleDetail";
var USER_LOGIN = "/login";
var WTB_SIGNUP = "/signup";
var WTB_SIGNIN = "/signin";
var DELETE_USER = "/delete/:id";
var USER_WISHLIST = "/wishlist";
var USER_READ = "/doneRead";
var GET_READLOGGER = "/readLogger";
var GET_USER_MY_PAGE = "/getUserMyPage/:id"; ///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL
//book.js
//Book

var BOOK = "/books"; //getBook
//OpenAPI 통한 책 검색 API : 클라이언트에서 키워드를 받아 큐레이션.

var GET_BOOK = "/:title/:display"; //getAllBook GET 전체 책 정보 제공 API : DB 에 저장된 책 정보들 제공.

var GET_ALLBOOK = "/"; //프단에서도 요청 바꿔야됨.
//addBook POST : 책 추가 API : Add Book 스크린에서 선택된 책들 DB에 저장.

var UPLOAD_BOOK = "/upload";
var ADD_BOOK_TO_BOOKLIST = "/addbook-to-booklist/:bookId/:booklistId"; //getBookDetail
// 선택 된 책(Single) 정보 제공 API : isbn 키워드로 DB에서 해당되는 책 정보를 찾아 클라이언트에게 제공.

var GET_BOOK_DETAIL = "/:id"; //commentBook
//댓글모델에 해당 책 및 작성자 저장 API

var COMMENT_BOOK = "/comment"; //getBookWish
//1책의 위시 수 갯수

var BOOK_WISH = "/wish/user/:id"; ///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL
//booklist.js
//Booklist

var BOOKLISTS = "/booklists"; //getBookList GET API : 해당 유저가 가지고 있는 모든 booklist_id를 반환 API.

var GET_BOOKLIST = "/"; //프단 수정
//booklist POST API : 제목과 선택된 책들로 구성된 Booklist 추가.

var UPLOAD_BOOKLIST = "/upload"; //프단 수정
//deleteBookList DELETE API : 선택된 BookList 삭제.

var DELETE_BOOKLIST = "/delete"; //getBooks
//해당 북 리스트가 가지고 있는 책들 반환 API

var GET_BOOKLIST_DETAIL = "/detail/:id"; //getOneBooklist
//해당 북리스트 정보를 booklist_object_id를 통해 반환 API

var GET_ONE_BOOKLIST = "/item:/:id"; // AddBookItem In BookList GET
// 북리스트 생성 시 추가 할 책들 검색 API : OpenAPI 검색과 달리 DB 에 저장 된 부분들만 검색.

var SEARCH_BOOK = "/:title";
var GET_ALL_READLOG = "/getAllReadLog";
var ALL_BOOKLIST = "/getAllBooklist/public"; ///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL
//comment.js
//Comment

var COMMENTS = "/comments"; //bookComment
//해당 책에 달려있는 전체 댓글들 호출 API. w/ 사용자 정보 포함.

var BOOK_COMMENT = "/:id"; //프단 수정
//deleteComment
//해당 유저가 남긴 댓글을 삭제하는 API.

var DELETE_COMMENT = "/delete";
var SEARCH_ROOT = "/search";
var SEARCH = "/"; //////////////////////////////////////////////////////////////////////////////////////////////////////////

var routes = {
  home: HOME,
  users: USERS,
  userDetail: USER_DETAIL,
  patchUser: PATCH_USER,
  userLogin: USER_LOGIN,
  googleSignIn: GOOGLE_SIGNIN,
  googleDetail: GOOGLE_DETAIL,
  wtbSignUp: WTB_SIGNUP,
  wtbSignIn: WTB_SIGNIN,
  deleteUser: DELETE_USER,
  userRead: USER_READ,
  userWishlist: USER_WISHLIST,
  getReadLogger: GET_READLOGGER,
  getUserMyPage: GET_USER_MY_PAGE,
  books: BOOK,
  getBook: GET_BOOK,
  getAllBook: GET_ALLBOOK,
  uploadBook: UPLOAD_BOOK,
  addToBooklist: ADD_BOOK_TO_BOOKLIST,
  getBookDetail: GET_BOOK_DETAIL,
  commentBook: COMMENT_BOOK,
  bookWish: BOOK_WISH,
  booklists: BOOKLISTS,
  getBooklist: GET_BOOKLIST,
  getBooklistDetail: GET_BOOKLIST_DETAIL,
  uploadBooklist: UPLOAD_BOOKLIST,
  deleteBookList: DELETE_BOOKLIST,
  getOneBooklist: GET_ONE_BOOKLIST,
  getAllBooklist: ALL_BOOKLIST,
  getAllReadLog: GET_ALL_READLOG,
  searchBook: SEARCH_BOOK,
  comments: COMMENTS,
  bookComment: BOOK_COMMENT,
  deleteComment: DELETE_COMMENT,
  searchRoot: SEARCH_ROOT,
  search: SEARCH
};
var _default = routes;
exports["default"] = _default;