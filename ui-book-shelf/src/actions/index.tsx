//  Action Creator
export interface Action {
	type: string;
	payload: any;
}

export const selectProduct = (product: any) => {
	return {
		type: 'PRODUCT_SELECTED',
		payload: product
	};
};
