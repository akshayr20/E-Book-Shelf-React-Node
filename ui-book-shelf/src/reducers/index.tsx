import { combineReducers } from 'redux';

import { Action } from '../interface';
import { Product } from '../interface';

export const productsReducer = (): Array<Product> => {
	return [
		{
			_id: '1',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg',
			title: 'Elon Musk',
			description: 'A brief about founder of spaceX, tesla, PayPal and many other companies',
			price: 10
		},
		{
			_id: '2',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg',
			title: 'Amazon',
			description: 'How Amazon Started',
			price: 50
		},
		{
			_id: '3',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg',
			title: 'Rich Dad Poor Dad',
			description: 'Top Seller books under financial section',
			price: 5
		},
		{
			_id: '4',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg',
			title: 'A Monk who sold his ferrari',
			description: 'Once in a lifetime book by Robin Sharma',
			price: 5
		},
		{
			_id: '5',
			imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Elon_Musk_2015.jpg/408px-Elon_Musk_2015.jpg',
			title: 'Shoe Dog',
			description: 'A brief about the CEO of Nike-Phil Knight',
			price: 5
		}
	];
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
	cartItems: addToCartReducer
});
