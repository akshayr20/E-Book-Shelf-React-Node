import React from 'react';

export interface CardProps {
	product: {
		imageUrl: string;
		title: string;
		description: string;
		price: number;
	};
}

const Card: React.SFC<CardProps> = props => {
	return (
		<div className="card">
			<img src={props.product.imageUrl} alt={props.product.title} />
			<div className="card__body">
				<h2>{props.product.title}</h2>
				<h4>{props.product.description}</h4>
				<h4>{props.product.price}</h4>
				<button className="ui-btn ui-btn__primary max-width">Add to Cart</button>
			</div>
		</div>
	);
};

export default Card;
