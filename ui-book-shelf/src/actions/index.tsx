import { Product } from '../interface';
import AXIOS from '../api/axios-instance';

//  Action Creator


export const fetchProducts = () => async (dispatch: any) => {
	try {
		const response = await AXIOS.get('products');
		const { products } = response.data;
		dispatch({ type: 'FETCH_PRODUCTS', payload: products });
	} catch (error) {
		dispatch({ type: 'FETCH_PRODUCTS', payload: [] });		
	}
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
