import { ApiConfig, RequestConfig } from "./api";

export const damApiConfig: ApiConfig = {
    host: 'http://localhost:1337',
    error: () => {},
    requests: {
        // 获取用户信息
        getUser: 'GET /users/me',
        // 查找用户
        findUser: 'GET /users',
        //  查找单个用户
        findOneUser: 'GET /users/:id',
        // 忘记密码
        forgotPassword: 'POST auth/forgot-password',
        // 重置密码
        resetPassword: 'POST /auth/reset-password',
        // 注册用户
        register: 'POST /auth/local/register',
        // 获取所有商品
        getProducts: 'GET /products',
        // 获取某个商品
        getProduct: 'GET /products/:id',
    }
}

export interface MainRequest {
    getUser?: RequestConfig,
    findUser?: RequestConfig,
    findOneUser?: RequestConfig,
    forgotPassword?: RequestConfig,
    resetPassword?: RequestConfig,
    register?: RequestConfig,
    getProducts?: RequestConfig,
    getProduct?: RequestConfig,
}