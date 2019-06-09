import { Action } from '../interface';

const initialState = {
	isAuthenticated: false,
	user: {}
};

export default (state = initialState, action: Action) => {
	if (action.type === 'SET_CURRENT_USER') {
		const user = action.payload ? action.payload : {};
		return {
			isAuthenticated: Boolean(Object.keys(user).length),
			user: action.payload
		};
	}
	return state;
};
