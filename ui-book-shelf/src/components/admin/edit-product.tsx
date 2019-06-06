import React from 'react';

export interface ProductProps {}

export interface ProductState {}

class EditProduct extends React.Component<ProductProps, ProductState> {
	state = { product: [] };
	render() {
		return <div>EditProduct</div>;
	}
}

export default EditProduct;
