import axios from 'axios';

const BASE_URL = 'https://15.165.139.216.nip.io';

const defaultApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const authApi = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

authApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

authApi.interceptors.response.use((response) => {
    return response;
}, (error) => {
    // 토큰 만료시 로그아웃 처리
    if (error.response && error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/SignIn'; // 로그인 페이지로 이동
    }
    return Promise.reject(error);
});

export const defaultInstance = defaultApi;
export const authInstance = authApi;
