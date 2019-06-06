export interface Product {
	_id: string;
	imageUrl: string;
	title: string;
	description: string;
	price: number;
}

export interface Action {
	type: string;
	payload: any;
}
