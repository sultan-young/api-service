import axios from "axios";

const createRequest = () => {

    const request = axios.create({
        timeout: 30000,
    });

    request.interceptors.request.use((config) => {
        if (config.url.includes(':id')) {
            config.url = config.url.replace(':id', config.data.id)
        }
        return config;
    }, (error) => {
        console.log('[request error]')
    });

    request.interceptors.response.use((config) => {
        // console.log('response')
        return config.data;
    },  (error) => {
        console.log('[response error]')
    })

    return request;
}

export default createRequest;