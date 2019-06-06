import { combineReducers } from 'redux';

import { Action } from '../actions';
import { Product } from '../interface';

export const productsReducer = (): Array<Product> => {
	return [
		{
			_id: '1',
			imageUrl: 'asd',
			title: 'Play Station',
			description: 'A Sony product',
			price: 10
		},
		{
			_id: '2',
			imageUrl: 'asd',
			title: 'X-BOX',
			description: 'A Microsoft product',
			price: 50
		},
		{
			_id: '3',
			imageUrl: 'asd',
			title: 'Gaming Laptop',
			description: 'With 16gb ram and 2gb graphics card',
			price: 5
		},
		{
			_id: '4',
			imageUrl: 'asd',
			title: 'Gaming Laptop',
			description: 'With 16gb ram and 2gb graphics card',
			price: 5
		},
		{
			_id: '5',
			imageUrl: 'asd',
			title: 'Gaming Laptop',
			description: 'With 16gb ram and 2gb graphics card',
			price: 5
		}
	];
};

export const selectedProductsReducer = (selectedProducts = [], action: Action) => {
	if (action.type === 'PRODUCT_SELECTED') {
		return action.payload;
	}

	return selectedProducts;
};

export default combineReducers({
	products: productsReducer,
	cartItems: selectedProductsReducer
});
