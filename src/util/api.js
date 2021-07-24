import axios from 'axios';
import {useDispatch} from 'react-redux' 
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE
} from "store/actions/ActionTypes";


const baseURL = "https://ogadonate.com.ng/api/"
// const baseURL = "http://localhost:8000/api/"


const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

export default axiosInstance;