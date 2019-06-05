import React from 'react';
import Card from '../../dumbComponents/card';

export interface LandingScreenProps {}

export interface LandingScreenState {}

class LandingScreen extends React.Component<LandingScreenProps, LandingScreenState> {
	state = { Products: [] };
	product = {
		imageUrl: 'asd',
		title: 'XBOX',
		description: 'A Sony product',
		price: 10
	};

	render() {
		return (
			<div>
				<Card product={this.product} />
			</div>
		);
	}
}

export default LandingScreen;
