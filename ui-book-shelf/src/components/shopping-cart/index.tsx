import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../actions';
import { Product } from '../../interface';
import { Table } from 'react-bootstrap';

export interface ShoppingCartProps {
	cartItems: Array<Product>;
}

export interface ShoppingCartState {}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
	renderItems() {
		return this.props.cartItems.map((item: Product) => {
			return (
				<Table responsive striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							<th>Quantity</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>1</td>
							<td>
								<img src={item.imageUrl} alt={item.title} />
							</td>
							<td>{item.title}</td>
							<td>{item.price}</td>
							<td>Edit Quantity</td>
						</tr>
					</tbody>
				</Table>
			);
		});
	}

	noProductInCart() {
		return <div className="no-products">No Product In the carts</div>;
	}

	renderCartItem() {
		return this.props.cartItems.length ? this.renderItems() : this.noProductInCart();
	}
	render() {
		console.log(this.props);
		return (
			<div>
				<header className="u-lg-margin-bottom">
					<h3>Your Shopping Bag</h3>
				</header>
				<div>{this.renderCartItem()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { cartItems: state.cartItems };
};

export default connect(
	mapStateToProps,
	{ addToCart }
)(ShoppingCart);
