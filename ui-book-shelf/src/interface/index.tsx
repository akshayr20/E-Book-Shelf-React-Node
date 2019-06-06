export interface Product {
	_id: string;
	imageUrl: string;
	name: string;
	description: string;
	price: number;
}

export interface Action {
	type: string;
	payload: any;
}
