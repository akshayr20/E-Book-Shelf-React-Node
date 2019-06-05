import React from 'react';

export interface UserOrdersProps {}

export interface UserOrdersState {}

class UserOrders extends React.Component<UserOrdersProps, UserOrdersState> {
	state = { UserOrders: [] };
	render() {
		return <div>UserOrders</div>;
	}
}

export default UserOrders;
