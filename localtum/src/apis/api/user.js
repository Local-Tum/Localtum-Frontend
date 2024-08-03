/**
 * 사용자 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 로그인
export const signin = async (userInfo) => {
  try {
    const result = await defaultInstance.post(`/localtum/signIn`, userInfo);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// 사용자 정보 조회
export const getUserInfo = async () => {
  try {
    const result = await authInstance.get(`/localtum/mypage/user`);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// 닉네임 수정
export const updateNickname = async (nickname) => {
  try {
    const result = await authInstance.put(`/localtum/mypage/user`, nickname);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};
