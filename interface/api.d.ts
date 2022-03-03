import axios, { AxiosInstance } from 'axios';

interface apisConfig {
    mainApi?: ApiConfig,
    damApi?: ApiConfig,
}
interface ApiConfig {
    host: string,
    error: Function,
    requests: Request,
}
type IMethod = 'post' | 'get';

interface RequestInstance extends AxiosInstance {
    createApi: <T extends { [k: string]: any }>(apiList: { [k in keyof T]: string }) => any;
}
interface Request {
    [propName: string]: String,
}

export type RequestFunction = (data?: {}, config?: any) => Promise<any>;
export type RequestConfig = string | RequestFunction;

export {
    apisConfig,
    IMethod,
    RequestInstance,
    ApiConfig,
    RequestFunction,
    RequestConfig,
}