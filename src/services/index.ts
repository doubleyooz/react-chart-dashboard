import axios, { AxiosInstance } from 'axios';

//api.defaults.headers.common['Content-Type'] ='application/json;charset=utf-8';
axios.defaults.headers.common[
    'Access-Control-Allow-Origin'
] = `${process.env.REACT_APP_AUTH_SERVER2}`;
axios.defaults.withCredentials = true;

interface Response {
    data: { _id: string };
    message: string;
    metadata: { accessToken: string };
}

const api: AxiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

const config = (token: string) => {
    return {
        headers: {
            Authorization: `Basic ${token}`,
        },
    };
};

const refreshToken = async () => {
    return await api.get('/refresh-token', { withCredentials: true });
};

const revokeToken = async () => {
    return await api.get('/revoke-token', { withCredentials: true });
};

const signIn = async (email: string, password: string) => {
    return await api.get(`/sign-in`, {
        auth: {
            username: email,
            password: password,
        },
    });
};

export { signIn, refreshToken, revokeToken };
