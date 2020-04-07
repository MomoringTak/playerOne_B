const comment = {
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
};

export default comment;
