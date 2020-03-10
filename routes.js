//Routes
//index.js
const HOME = "/";

///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL

//user.js
//User
const USERS = "/users";

// GET
const USER_DETAIL = "/";

// PATCH USER
const PATCH_USER = "/:googleId";

//POST new User or Find
const ADD_USER = "/add";

const USER_LOGIN = "/login";

///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL

//book.js
//Book
const BOOK = "/books";

//getBook
//OpenAPI 통한 책 검색 API : 클라이언트에서 키워드를 받아 큐레이션.
const GET_BOOK = "/:title/:display";

//getAllBook GET 전체 책 정보 제공 API : DB 에 저장된 책 정보들 제공.
const GET_ALLBOOK = "/";

//프단에서도 요청 바꿔야됨.
//addBook POST : 책 추가 API : Add Book 스크린에서 선택된 책들 DB에 저장.
const UPLOAD_BOOK = "/upload";

const ADD_BOOK_TO_BOOKLIST = "/addbook-to-booklist/:bookId/:booklistId";

//getBookDetail
// 선택 된 책(Single) 정보 제공 API : isbn 키워드로 DB에서 해당되는 책 정보를 찾아 클라이언트에게 제공.
const GET_BOOK_DETAIL = "/:id";

//commentBook
//댓글모델에 해당 책 및 작성자 저장 API
const COMMENT_BOOK = "/comment";

///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL

//booklist.js
//Booklist
const BOOKLISTS = "/booklists";

//getBookList GET API : 해당 유저가 가지고 있는 모든 booklist_id를 반환 API.
const GET_BOOKLIST = `/`;

//프단 수정
//booklist POST API : 제목과 선택된 책들로 구성된 Booklist 추가.
const UPLOAD_BOOKLIST = `/upload`;

//프단 수정
//deleteBookList DELETE API : 선택된 BookList 삭제.
const DELETE_BOOKLIST = `/delete`;

//getBooks
//해당 북 리스트가 가지고 있는 책들 반환 API
const GET_BOOKLIST_DETAIL = "/detail/:id";

//getOneBooklist
//해당 북리스트 정보를 booklist_object_id를 통해 반환 API
const GET_ONE_BOOKLIST = "/item:/:id";

// AddBookItem In BookList GET
// 북리스트 생성 시 추가 할 책들 검색 API : OpenAPI 검색과 달리 DB 에 저장 된 부분들만 검색.
const SEARCH_BOOK = "/:title";

///  \_O.O_/  ======  OTL
//////////////////////////////////////////////////////////////////////////////////////////////////////////
///  \_O.O_/  ======  OTL

//comment.js
//Comment
const COMMENTS = "/comments";

//bookComment
//해당 책에 달려있는 전체 댓글들 호출 API. w/ 사용자 정보 포함.
const BOOK_COMMENT = "/:id";

//프단 수정
//deleteComment
//해당 유저가 남긴 댓글을 삭제하는 API.
const DELETE_COMMENT = "/delete";

//////////////////////////////////////////////////////////////////////////////////////////////////////////

const routes = {
  home: HOME,
  users: USERS,
  userDetail: USER_DETAIL,
  patchUser: PATCH_USER,
  userLogin: USER_LOGIN,
  addUser: ADD_USER,
  books: BOOK,
  getBook: GET_BOOK,
  getAllBook: GET_ALLBOOK,
  uploadBook: UPLOAD_BOOK,
  addToBooklist: ADD_BOOK_TO_BOOKLIST,
  getBookDetail: GET_BOOK_DETAIL,
  commentBook: COMMENT_BOOK,
  booklists: BOOKLISTS,
  getBooklist: GET_BOOKLIST,
  getBooklistDetail: GET_BOOKLIST_DETAIL,
  uploadBooklist: UPLOAD_BOOKLIST,
  deleteBookList: DELETE_BOOKLIST,
  getOneBooklist: GET_ONE_BOOKLIST,
  searchBook: SEARCH_BOOK,
  comments: COMMENTS,
  bookComment: BOOK_COMMENT,
  deleteComment: DELETE_COMMENT
};

export default routes;