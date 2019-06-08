import { Product } from '../interface';
import AXIOS from '../api/products';
import setAuthorizationToken from '../api/set-authorization-token';

//  Action Creator
export const createAccount = (signUpCredentials: any) => async () => {
	try {
		const response = await AXIOS.post('users/signup', signUpCredentials);
		const authCredentials = JSON.parse(response.config.data);
		fetchAndSetToken(authCredentials);
	} catch (error) {
		console.log(error);
	}
};

export const fetchAndSetToken = (authCredentials: any) => async () => {
	try {
		const response = await AXIOS.post('users/login', authCredentials);
		const token = response.data.token;
		localStorage.setItem('jwtToken', token);
		setAuthorizationToken(token);
	} catch (error) {
		console.log(error);
	}
};

export const fetchProducts = () => async (dispatch: any) => {
	const response = await AXIOS.get('products');
	const { products } = response.data;
	dispatch({ type: 'FETCH_PRODUCTS', payload: products });
};

export const createProduct = (payload: Product) => async () => {
	const config = {
		headers: { Authorization: 'Bearer ' + localStorage.jwtToken }
	};

	const response = await AXIOS.post('products', payload, config);
	console.log(response);
};

export const addToCart = (product: Product) => {
	return {
		type: 'ADD_TO_CART',
		payload: product
	};
};
