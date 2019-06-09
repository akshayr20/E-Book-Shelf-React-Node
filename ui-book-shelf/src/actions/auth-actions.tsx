import AXIOS from '../api/axios-instance';

export const createAccount = (signUpCredentials: any) => async () => {
	try {
		const response = await AXIOS.post('users/signup', signUpCredentials);
		const authCredentials = JSON.parse(response.config.data);
		login(authCredentials);
	} catch (error) {
		console.log(error);
	}
};

export const login = (authCredentials: any) => async () => {
	try {
		const response = await AXIOS.post('users/login', authCredentials);
		const token = response.data.token;
		localStorage.setItem('jwtToken', token);
	} catch (error) {
		console.log(error);
	}
};
