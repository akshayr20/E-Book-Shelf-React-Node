import { Product } from '../interface';

//  Action Creator
export const addToCart = (product: Product) => {
	return {
		type: 'ADD_TO_CART',
		payload: product
	};
};
