import axios from 'axios';
import {useDispatch} from 'react-redux' 
import history from './history'
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE
} from "store/actions/ActionTypes";


const baseURL = "https://main.ogadonate.com.ng/api/"
// const baseURL = "http://localhost:8000/api/"


const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    async function(error) {
        const originalRequest = error.config;

        if(
            error.response.data.code === 'token_not_valid' &&
            error.response.status === 401 &&
            error.response.statusText === 'Unauthorized'
        ) {
            const refreshToken = localStorage.getItem('refresh');
            const dispatch = useDispatch()

            if(refreshToken) {
                const tokenParts = JSON.parse(atob(refreshToken.split('.')[1]));

                // exp date in token is expressed in seconds, while now() returns milliseconds:
                const now = Math.ceil(Date.now() / 1000);

                if(tokenParts.exp > now) {
                    return axiosInstance
                        .post('auth/jwt/refresh/', {
                            refresh: refreshToken,
                        })
                        .then((response) => {
                            localStorage.setItem('access', response.data.access);
                            localStorage.setItem('refresh', response.data.refresh);

                            axiosInstance.defaults.headers['Authorization'] =
                                'JWT ' + response.data.access;
                            originalRequest.headers['Authorization'] =
                                'JWT ' + response.data.access;

                            return axiosInstance(originalRequest);
                        })
                        .catch((err) => {
                            dispatch({ type: SHOW_ERROR_MESSAGE, payload: 'Your session has expired. Please log in again.' });
                            history.push('/auth');
                        });
                } else {
                    dispatch({ type: SHOW_ERROR_MESSAGE, payload: 'Your session has expired. Please log in again.' })
                    history.push('/auth');
                }
            } else {
                dispatch({ type: SHOW_ERROR_MESSAGE, payload: 'Your session has expired. Please log in again.' })
                history.push('/auth');
            }
        }
        // specific error handling done elsewhere
        return Promise.reject(error);
    }
);


export default axiosInstance;