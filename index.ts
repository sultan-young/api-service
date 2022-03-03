import { AxiosInstance } from 'axios';
import createRequest from './createRequest';
import { apisConfig, IMethod, RequestFunction, RequestInstance } from './interface/api';
import { damApiConfig } from './interface/dam-api';
import { mainApiConfig, MainRequest } from './interface/main-api';


type API<T> = { [key in keyof T]: RequestFunction };


class APIService {
    request: AxiosInstance;
    mainApi: API<MainRequest> = {};
    damApi: API<MainRequest> = {};

    constructor() {

    }
    init(apisConfig: apisConfig) {
        this.request = createRequest();

        for (let key in apisConfig) {
            const { requests, host } = apisConfig[key];
            for(let requestKey in requests) {
                const [method, requestUrl] = requests[requestKey].split(' ');
                this[key][requestKey] = (data, config) => {
                    return this.request({
                        url: (host + '/api' + requestUrl) as string,
                        method: method as IMethod,
                        data,
                        ...config,
                    })
                }
            }
        }
    }
}
const apiService = new APIService();
apiService.init({
    mainApi: mainApiConfig,
    damApi: damApiConfig,
});

export {
    apiService,
};



// apiService.getUser()