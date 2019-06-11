import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../actions';
import { Product } from '../interface';
import { Link } from 'react-router-dom';

export interface CardProps {
	product: Product;
	cartItems: Array<Product>;
	addToCart: Function;
}

export interface CardState {}

class Card extends React.Component<CardProps, CardState> {
	renderButton() {
		const isItemInCart = !!this.props.cartItems.find(item => item._id === this.props.product._id);
		return (
			<React.Fragment>
				{isItemInCart ? (
					<Link to="/cart" className="ui-btn ui-btn__green max-width">
						Go to Cart
					</Link>
				) : (
					<button className="ui-btn ui-btn__primary max-width" onClick={() => this.props.addToCart(this.props.product)}>
						Add to Cart
					</button>
				)}
			</React.Fragment>
		);
	}
	render() {
		return (
			<div className="card">
				<img className="card__image" src={this.props.product.imageUrl} alt={this.props.product.name} />
				<div className="card__body">
					<span className="price">Price: {this.props.product.price}</span>
					<span className="title">{this.props.product.name}</span>
					{this.renderButton()}
				</div>
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
)(Card);
