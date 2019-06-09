import { combineReducers } from 'redux';

import { Action } from '../interface';
import { Product } from '../interface';

import authReducer from './auth-reducer';

export const productsReducer = (Products: Array<Product> = [], action: Action): Array<Product> => {
	if (action.type === 'FETCH_PRODUCTS') {
		return [...action.payload];
	}
	return Products;
};

export const addToCartReducer = (selectedProducts: Array<Product> = [], action: Action) => {
	if (action.type === 'ADD_TO_CART') {
		const alreadyInTheCart = selectedProducts.find(product => product._id === action.payload._id);
		if (!alreadyInTheCart) {
			return [...selectedProducts, action.payload];
		}
	}

	return selectedProducts;
};

export default combineReducers({
	products: productsReducer,
	cartItems: addToCartReducer,
	auth: authReducer
});
