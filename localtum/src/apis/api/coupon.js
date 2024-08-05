// 스탬프 관련 API
import { defaultInstance, authInstance } from "../utils/instance";

// 스탬프 목록조회
export const getStampList = async () => {
  try {
    const result = await authInstance.get(`/localtum/mypage/stamp`);
    return result.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

// 카페별 스탬프 조회
export const getCafeStamp = async (cafeName) => {
  try {
    const result = await authInstance.get(`/localtum/cafe_details/${cafeName}`);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
};

