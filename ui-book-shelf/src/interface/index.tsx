export interface Product {
	_id: string;
	imageUrl: string;
	name: string;
	description: string;
	price: number;
}

export interface Orders {
	_id: string;
	purchaseQuantity: number;
	date: string;
	product: Product;
}

export interface Action {
	type: string;
	payload: any;
}

export interface CheckOutItems {
	productId: string;
	purchaseQuantity: number;
}
