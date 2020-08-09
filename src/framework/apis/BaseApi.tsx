import axios from 'axios';
import cookie from 'cookie';
import { API_BASE_URL, TOKEN_NAME } from '../utils/ApiUtils';

let axiosInstance: import('axios').AxiosInstance | null = null;

let cookies = cookie.parse(document.cookie);
let token = cookies[TOKEN_NAME];

const _initAxios = () => {
	cookies = cookie.parse(document.cookie);
	token = cookies[TOKEN_NAME];
	axiosInstance = axios.create({
		baseURL: `${API_BASE_URL}/`,
		headers: {
			Authorization: token,
			// 'Cache-Control': 'no-cache'
		},
	});
};

const _hasTokenChanged = () => {
	return token !== cookie.parse(document.cookie)[TOKEN_NAME];
};

const getRequestInstance = () => {
	if (_hasTokenChanged() || !token || !axiosInstance) _initAxios();
	return axiosInstance;
};

export default getRequestInstance;
