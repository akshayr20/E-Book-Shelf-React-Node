import React from 'react';

export interface EditProductsProps {}

export interface EditProductsState {}

class EditProducts extends React.Component<EditProductsProps, EditProductsState> {
	state = { products: [] };
	render() {
		return <div>EditProducts</div>;
	}
}

export default EditProducts;
