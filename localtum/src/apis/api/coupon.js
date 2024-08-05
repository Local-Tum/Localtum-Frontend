// 쿠폰 관련 API
import { defaultInstance, authInstance } from "../utils/instance";

// 쿠폰 목록조회
export const getCouponList = async () => {
  try {
    const result = await authInstance.get(`/localtum/cafe_details/order_coupon`);
    return result.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};

