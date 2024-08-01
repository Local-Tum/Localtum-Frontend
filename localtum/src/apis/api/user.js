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
