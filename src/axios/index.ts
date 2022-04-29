import axios from 'axios'

const api = axios.create( {
    baseURL: process.env.REACT_APP_API_URL,
})

api.interceptors.request.use(config => {
    config.url = config.url + 'key=98868634f9274e1083375040222704' + process.env.REACT_APP_API_KEY;
    return config;
});

export default api;