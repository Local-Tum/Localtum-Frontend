import { defaultInstance, authInstance } from "../utils/instance";

// 즐겨찾기 추가
export const addBookmark = async (cafeName) => {
  try {
      console.log('Requesting to add bookmark:', { cafeName });
      const result = await authInstance.post(`/localtum/search/like`, { cafeName });
      console.log('Add bookmark response:', result);
      return result;
  } catch (e) {
      console.error('Add bookmark error:', e);
      return e;
  }
};

// 즐겨찾기 삭제
export const deleteBookmark = async (cafeName) => {
  try {
      console.log('Requesting to delete bookmark:', { cafeName });
      const result = await authInstance.delete(`/localtum/search/like`, { data: { cafeName } });
      console.log('Delete bookmark response:', result);
      return result;
  } catch (e) {
      console.error('Delete bookmark error:', e);
      return e;
  }
};

// 즐겨찾기 조회
export const getBookmarks = async () => {
  try {
      const result = await authInstance.get(`/localtum/search/like`); // authInstance 사용
      return result;
  } catch (e) {
      console.error(e);
      return e;
  }
};