const book = {
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
};

export default book;
