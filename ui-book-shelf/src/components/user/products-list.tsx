import React from 'react';
import Card from '../../shared/card';

import { connect } from 'react-redux';
import { Product } from '../../interface';

export interface ProductsListProps {
	products: Array<Product>;
}

export interface ProductsListState {}

class ProductsList extends React.Component<ProductsListProps, ProductsListState> {
	renderList() {
		return this.props.products.map(product => {
			return <Card product={product} key={product._id} />;
		});
	}

	render() {
		return <div className="flex-space-between u-mt-md">{this.renderList()}</div>;
	}
}

const mapStateToProps = (state: any) => {
	console.log(state);
	return { products: state.products };
};

export default connect(mapStateToProps)(ProductsList);
