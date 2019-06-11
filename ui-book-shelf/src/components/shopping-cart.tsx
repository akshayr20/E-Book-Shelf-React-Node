import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { Product } from '../interface';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface ShoppingCartProps {
	cartItems: Array<Product>;
	auth: {
		isAuthenticated: boolean;
		user: {};
	};
}

export interface ShoppingCartState {}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
	renderCartItems() {
		return this.props.cartItems.map((item: Product, i) => {
			return (
				<tr key={item._id} className="middle">
					<td>{i + 1}</td>
					<td>
						<img className="u-md-image" src={item.imageUrl} alt={item.name} />
					</td>
					<td>{item.name}</td>
					<td>Rs. {item.price}.00</td>
					{/* <td>
						<span className="snippet-btn">
							<button className="ui-btn  bg-color-red">-</button>
							<span className="u-sm-pd">2</span>
							<button className="ui-btn bg-color-primary">+</button>
						</span>
					</td> */}
				</tr>
			);
		});
	}

	createCartTable() {
		return (
			<div>
				<header className="u-sm-pd space-between-flex sm-border">
					<h3>Your Shopping Bag</h3>
					<button  className="ui-btn ui-btn__warning">Clear Cart</button>
				</header>
				<Table responsive striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							{/* <th>Quantity</th> */}
						</tr>
					</thead>
					<tbody>{this.renderCartItems()}</tbody>
				</Table>
			</div>
		);
	}

	noProductInCart() {
		return (
			<div className="no-products">
				<h3 className="u-mb-md"> Your Shopping Cart is empty.</h3>
				<p className="u-mb-sm"> Your Shopping Cart lives to serve. Give it purpose--fill it with books, CDs, videos, DVDs and more. </p>
				{!this.props.auth.isAuthenticated ? (
					<span>
						If you already have an account, <Link to="/login">Login.&nbsp;</Link>
					</span>
				) : (
					''
				)}
				To see your Cart, Or Continue shopping on the <Link to="/">Book-Shelf</Link> homepage.
			</div>
		);
	}

	renderCartItem() {
		return this.props.cartItems.length ? this.createCartTable() : this.noProductInCart();
	}
	render() {
		return (
			<div>
				<div>{this.renderCartItem()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { cartItems: state.cartItems, auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ addToCart }
)(ShoppingCart);
