import React from 'react';

export interface ProductListProps {}

export interface ProductListState {}

class ProductList extends React.Component<ProductListProps, ProductListState> {
	state = { products: [] };
	render() {
		return <div>ProductList</div>;
	}
}

export default ProductList;
