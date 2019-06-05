import React from 'react';

export interface ProductProps {}

export interface ProductState {}

class Product extends React.Component<ProductProps, ProductState> {
	state = { product: [] };
	render() {
		return <div>Product</div>;
	}
}

export default Product;
