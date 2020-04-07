const routes = {
  home: {
    Home: {
      route: `/`,
      method: `GET`,
      description: `홈 페이지`,
    },
  },
  user: {
    UserDetail: {
      route: `/users`,
      method: `GET`,
      description: `로그인 된 사용자 정보 반환 함수`,
    },
    UpdateUser: {
      route: `/users/users/update`,
      method: `PATCH`,
      description: `사용자 이름 수정 함수`,
    },
    GoogleSignIn: {
      route: `/users/googleSignIn`,
      method: `POST`,
      description: `SSO 구글 로그인 및 회원 가입`,
    },
    GoogleDetail: {
      route: `/users/googleDetail`,
      method: `GET`,
      description: `초기 구글 회원 나이 성별 추가 함수`,
    },
    UserLogin: {
      route: `/users/login`,
      method: `POST`,
      description: `JWT 사용자 로그인 함수`,
    },
    WTB_SignUp: {
      route: `/users/signup`,
      method: `POST`,
      description: `JWT 사용자 생성 함수`,
    },
    WTB_SignIn: {
      route: `/users/signin`,
      method: `POST`,
      description: `사용자 로그인 함수`,
    },
    DeleteUser: {
      route: `/users/delete/:id`,
      method: `DELETE`,
      description: `사용자 회원탈퇴 함수`,
    },
    UserWishlist: {
      route: `/users/wishlist`,
      method: `GET`,
      description: `특정 책 사용자의 좋아요 로거 조회 함수`,
    },
    handleUserDoneRead: {
      route: `/users/doneRead`,
      method: `GET`,
      description: `사용자 읽음 책 로거 생성 및 업데이트 함수`,
    },
    GetReadLogger: {
      route: `/users/readLogger`,
      method: `GET`,
      description: `특정 책 사용의자의 읽음 책 로거 조회 함수`,
    },
    GetUserMyPage: {
      route: `/users/getUserMyPage/:id"`,
      method: `GET`,
      description: `유저 프로필 정보 반환 함수 - 기본 정보/ 댓글 / 읽은 책/ 좋아요한 책`,
    },
  },
  book: {
    GetAllBook: {
      route: `/books`,
      method: `GET`,
      description: `모든 책 데이터 조회 함수`,
    },
    GetCuration: {
      route: `/books/getCuration`,
      method: `GET`,
      description: `나이/좋아요/읽음/댓글에 따른 책 조회 함수 `,
    },
    GetAgeRecommendation: {
      route: `/books/getAgeRecommendation/:id`,
      method: `GET`,
      description: `나이에 따른 책 조회 함수`,
    },
    getRecentBook: {
      route: `/books/getRecentBook`,
      method: `GET`,
      description: `최근 등록된 책 조회 함수`,
    },
    GetBook: {
      route: `/books/:title/:display`,
      method: `GET`,
      description: `책 제목 및 갯수 인자를 통한 네이버 책 API 통한 조회 함수`,
    },
    UploadBook: {
      route: `/books/upload`,
      method: `POST`,
      description: `새로운 책 등록 함수`,
    },
    AddBookToBooklist: {
      //주소 수정 필요
      route: `/books//addbook-to-booklist/:bookId/:booklistId`,
      method: `POST`,
      description: `책장에 책 추가 함수`,
    },
    GetBookDetail: {
      route: `/books/:id"`,
      method: `GET`,
      description: `특정 책 정보 조회 함수`,
    },
    CommentBook: {
      route: `/books"/comment"`,
      method: `POST`,
      description: `특정 책 사용자 댓글 생성 함수`,
    },
    BookWish: {
      //명칭 수정 필요
      route: `/books/wish/user/:id`,
      method: `GET`,
      description: `특정 책에 전체 좋아요 및 읽은 사용자 수 조회 함수`,
    },
  },
  booklist: {
    GetBooklist: {
      route: `/booklists/`,
      method: `GET`,
      description: ``,
    },
    UploadBooklist: {
      route: `/booklists/upload`,
      method: `POST`,
      description: `새로운 책장 생성 함수`,
    },
    DeleteBookList: {
      route: `/booklists/delete`,
      method: `DELETE`,
      description: `특정 책장 삭제 함수`,
    },
    GetBooklistDetail: {
      route: `/booklists/detail/:id`,
      method: `GET`,
      description: `특정 책장 정보 조회 함수`,
    },
    GetAllReadLog: {
      route: `/booklists/getAllReadLog`,
      method: `GET`,
      description: `책장 속 읽은 책들 통계 함수`,
    },
    GetAllBooklist: {
      route: `/booklists/getAllBooklist/public`,
      method: `GET`,
      description: `등록되 있는 책장 반환 함수`,
    },
    SearchBook: {
      route: `/booklists/:title`,
      method: `GET`,
      description: `DB에 등록되 있는 책들 조회 함수`,
    },
  },
  comment: {
    BookComment: {
      route: `/comments/:id`,
      method: `GET`,
      description: `특정 책이 가지고 있는 댓글 반환 함수`,
    },
    DeleteComment: {
      route: `/comments/delete`,
      method: `DELETE`,
      description: `책 페이지 댓글 삭제 함수`,
    },
    DeleteProfileComment: {
      route: `/comments/profileComment`,
      method: `DELETE`,
      description: `사용자 마이페이지 댓글 삭제 함수`,
    },
  },
  serach: {
    Search: {
      route: `/search`,
      method: `GET`,
      description: `책 및 책장 조회 검색 함수`,
    },
  },
};

const home = routes.home;
const user = routes.user;
const book = routes.book;
const booklist = routes.booklist;
const comment = routes.comment;
const search = routes.search;

export { home, user, book, booklist, comment, search };
