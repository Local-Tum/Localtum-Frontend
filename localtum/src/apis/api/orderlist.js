/**
 * 주문내역 관련 API
 */
import { defaultInstance, authInstance } from "../utils/instance";

// 주문내역 조회
export const getOrderList = async () => {
  try {
    const result = await authInstance.get(`/localtum/order_list`);
    return result.data;
  } catch (e) {
    console.log(e);
    return e;
  }
};