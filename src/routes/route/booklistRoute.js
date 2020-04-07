const booklist = {
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
};

export default booklist;
