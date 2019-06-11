import React from 'react';
import Card from '../../shared/card';

import { fetchProducts } from '../../actions';

import { connect } from 'react-redux';
import { Product } from '../../interface';

export interface ProductsListProps {
	products: Array<Product>;
	fetchProducts: Function;
}

export interface ProductsListState {}

class ProductsList extends React.Component<ProductsListProps, ProductsListState> {
	componentDidMount() {
		this.props.fetchProducts();
	}

	renderList() {
		return this.props.products.map(product => {
			return <Card product={product} key={product._id} />;
		});
	}

	render() {
		return <div className="product-list u-mt-md">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state: any) => {
	return { products: state.products };
};

export default connect(
	mapStateToProps,
	{ fetchProducts }
)(ProductsList);
