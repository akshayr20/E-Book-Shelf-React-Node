import React from 'react';
export interface CardProps {
	product: {
		imageUrl: string;
		name: string;
		description: string;
		price: number;
	};
	onAddToCart: Function;
}

const Card: React.SFC<CardProps> = props => {
	return (
		<div className="card">
			<div className="card__image">
				<img src="https://amp.businessinsider.com/images/59f8dc483e9d25db458b5dfc-750-563.jpg" alt={props.product.name} />
			</div>
			<div className="card__body">
				<span className="price">Price: {props.product.price}</span>
				<span className="title">{props.product.name}</span>
				<button className="ui-btn ui-btn__primary max-width" onClick={() => props.onAddToCart(props.product)}>
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default Card;
