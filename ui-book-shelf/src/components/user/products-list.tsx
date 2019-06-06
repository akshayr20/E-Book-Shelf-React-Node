import React from 'react';
import Card from '../../shared/card';
import axios from 'axios';

import { addToCart, productList } from '../../actions';

import { connect } from 'react-redux';
import { Product } from '../../interface';

export interface ProductsListProps {
	products: Array<Product>;
	addToCart: Function;
	productList: Function;
}

export interface ProductsListState {}

class ProductsList extends React.Component<ProductsListProps, ProductsListState> {
	componentDidMount() {
		this.fetchProducts();
	}

	fetchProducts() {
		axios
			.get(`http://localhost:8080/products`)
			.then((response: any) => {
				this.props.productList(response.data.products);
			})
			.catch((error: any) => {
				console.log(error);
			});
	}

	renderList() {
		console.log(this.props)
		return this.props.products.map(product => {
			return <Card product={product} key={product._id} onAddToCart={(selectedProduct: Product) => this.props.addToCart(selectedProduct)} />;
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
	{ addToCart, productList }
)(ProductsList);
