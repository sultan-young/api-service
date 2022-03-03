import axios, { AxiosInstance } from 'axios';
import { apisConfig, IMethod, RequestFunction, RequestInstance } from './interface/api';
import { damApiConfig } from './interface/dam-api';
import { mainApiConfig, MainRequest } from './interface/main-api';


type API<T> = { [key in keyof T]: RequestFunction };


class APIService {
    mainApi: API<MainRequest> = {};
    damApi: API<MainRequest> = {};

    constructor() {

    }
    init(apisConfig: apisConfig) {
        for (let key in apisConfig) {
            const { requests, host } = apisConfig[key];
            for(let requestKey in requests) {
                const [method, requestUrl] = requests[requestKey].split(' ');
                this[key][requestKey] = () => {
                    return axios({
                        url: (host + '/api' + requestUrl) as string,
                        method: method as IMethod,
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