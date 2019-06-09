import React from 'react';
import AXIOS from '../../api/axios-instance';
import axios from 'axios';

export interface UserOrdersProps {}

export interface UserOrdersState {}

class UserOrders extends React.Component<UserOrdersProps, UserOrdersState> {
	state = { UserOrders: [] };
	componentDidMount() {
		this.fetchUserOrders()
	}

	fetchUserOrders() {
		AXIOS
			.get(`orders/user`, {
				params: {
					userId: '5cfca262be7cdd1f1f04bd03'
				}
			})
			.then((response: any) => {
				console.log(response);
			})
			.catch((error: any) => {
				console.log(error);
			});
	}

	render() {
		return <div>UserOrders</div>;
	}
}

export default UserOrders;
