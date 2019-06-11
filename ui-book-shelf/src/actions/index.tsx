import { Product, CheckOutItems } from '../interface';
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

export const fetchOrders = () => async (dispatch: any) => {
	try {
		const response = await AXIOS.get('orders');
		const { orders } = response.data;
		dispatch({ type: 'FETCH_ORDERS', payload: orders });
	} catch (error) {
		dispatch({ type: 'FETCH_ORDERS', payload: [] });
	}
};

export const createProduct = (product: Product) => async () => {
	const response = await AXIOS.post('products', product);
	console.log(response);
};

export const addToCart = (product: Product) => {
	return {
		type: 'ADD_TO_CART',
		payload: product
	};
};

export const clearCart = () => {
	return {
		type: 'CLEAR_CART'
	};
};

export const checkOut = (userCart: Array<CheckOutItems>) => async (dispatch: any) => {
	try {
		const response = await AXIOS.post('orders', { userCart });
		console.log(response);
	} catch (error) {}
};
