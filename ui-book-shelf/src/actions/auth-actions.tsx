import AXIOS from '../api/axios-instance';
import jwt from 'jsonwebtoken';

export const createAccount = (signUpCredentials: any) => async () => {
	try {
		const response = await AXIOS.post('users/signup', signUpCredentials);
		const authCredentials = JSON.parse(response.config.data);
		login(authCredentials);
	} catch (error) {
		console.log(error);
	}
};

export const login = (authCredentials: any) => async (dispatch: any) => {
	try {
		const response = await AXIOS.post('users/login', authCredentials);
		const token = response.data.token;
		localStorage.setItem('jwtToken', token);
		AXIOS.defaults.headers.common['Authorization'] = `Bearer ${token}`;
		dispatch(setCurrentUser(jwt.decode(token)));
	} catch (error) {
		console.log(error);
	}
};

export const logout = () => async (dispatch: any) => {
	try {
		localStorage.removeItem('jwtToken');
		dispatch(setCurrentUser({}));
		delete AXIOS.defaults.headers.common['Authorization'];
	} catch (error) {
		console.log(error);
	}
};

export const setCurrentUser = (user: any) => {
	return {
		type: 'SET_CURRENT_USER',
		payload: user
	};
};
