import { Product } from '../interface';
import AXIOS from '../api/products';

//  Action Creator

export const fetchProducts = () => async (dispatch: any) => {
	const response = await AXIOS.get('products');
	const { products } = response.data;
	dispatch({ type: 'FETCH_PRODUCTS', payload: products });
};

export const addToCart = (product: Product) => {
	return {
		type: 'ADD_TO_CART',
		payload: product
	};
};
