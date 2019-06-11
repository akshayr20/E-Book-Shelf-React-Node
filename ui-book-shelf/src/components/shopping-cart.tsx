import React from 'react';
import { connect } from 'react-redux';
import { clearCart, checkOut } from '../actions';
import { Product } from '../interface';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface ShoppingCartProps {
	cartItems: Array<Product>;
	auth: {
		isAuthenticated: boolean;
		user: {};
	};
	clearCart: Function;
	checkOut: Function;
}

export interface ShoppingCartState {}

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
	getCartTotalPrice() {
		return this.props.cartItems.reduce((acc, val) => {
			return acc + val.price;
		}, 0);
	}

	checkOut() {
		const processedOrders = this.props.cartItems.map(item => {
			return {
				purchaseQuantity: 1,
				productId: item._id
			};
		});
		this.props.checkOut(processedOrders);
	}

	renderCartTable() {
		return (
			<div>
				<header className="u-sm-pd space-between-flex sm-border">
					<h3>Your Shopping Bag</h3>
					<button className="ui-btn ui-btn__warning" onClick={() => this.props.clearCart()}>
						Clear Cart
					</button>
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
					<tbody>
						{this.props.cartItems.map((item: Product, i) => {
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
						})}
					</tbody>
				</Table>
				<footer className="u-sm-pd space-between-flex sm-border">
					<h3>Item Total: Rs.{this.getCartTotalPrice()}.00</h3>
					<button className="ui-btn ui-btn__primary" onClick={() => this.checkOut()}>
						CHECK OUT
					</button>
				</footer>
			</div>
		);
	}

	renderEmptyCartMessage() {
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
		return this.props.cartItems.length ? this.renderCartTable() : this.renderEmptyCartMessage();
	}
	render() {
		return <React.Fragment>{this.renderCartItem()}</React.Fragment>;
	}
}

const mapStateToProps = (state: any) => {
	return { cartItems: state.cartItems, auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ clearCart, checkOut }
)(ShoppingCart);
