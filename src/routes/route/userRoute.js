const user = {
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
};

export default user;
