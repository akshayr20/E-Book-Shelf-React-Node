import React from 'react';

export interface ShoppingCartProps {}

export interface ShoppingCartState {}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
	state = { cartItems: [] };
	render() {
		return <div>CartItems</div>;
	}
}

export default ShoppingCart;
