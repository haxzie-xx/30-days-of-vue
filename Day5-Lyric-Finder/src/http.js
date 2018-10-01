import axios from 'axios';

axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1';

const request = [
    (config) => {
        config.params.apikey = process.env.VUE_APP_MUSIXMATCH_KEY;

        return config;
    },
    (error) => Promise.reject(error)
];

const response = [
    (response) => {
        const body = response.data.message.body;

        if (body.hasOwnProperty('track_list')) {
            body.track_list = body.track_list.map(({ track }) => track);
        }

        response.data = Object.assign({}, body);

        return response;
    },
    (error) => Promise.reject(error)
];

axios.interceptors.request.use(...request);
axios.interceptors.response.use(...response);

export default axios;
