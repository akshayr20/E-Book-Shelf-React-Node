import React from 'react';
import { connect } from 'react-redux';

import { fetchOrders } from '../../actions/index';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Orders } from '../../interface';

export interface UserOrdersProps {
	orders: Array<Orders>;
	fetchOrders: Function;
	auth: {
		isAuthenticated: boolean;
		user: {};
	};
}

export interface UserOrdersState {}

class UserOrders extends React.Component<UserOrdersProps, UserOrdersState> {
	componentDidMount() {
		this.props.fetchOrders();
	}

	renderOrdersInTable() {
		console.log(this.props.orders);
		return this.props.orders.map((item, i) => {
			return (
				<tr key={item._id} className="middle">
					<td>{i + 1}</td>
					<td>
						<img className="u-md-image" src={item.product.imageUrl} alt={item.product.name} />
					</td>
					<td>{item.product.name}</td>
					<td>Rs. {item.product.price}.00</td>
					{/* <td>
						<span className="snippet-btn">
							<button className="ui-btn  bg-color-red">-</button>
							<span className="u-sm-pd">2</span>
							<button className="ui-btn bg-color-primary">+</button>
						</span>
					</td> */}
				</tr>
			);
		});
	}

	showOrders() {
		return (
			<div>
				<header className="u-mb-md">
					<h3>Your Shopping Bag</h3>
				</header>
				<Table responsive striped bordered hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							<th>Date</th>
							{/* <th>Quantity</th> */}
						</tr>
					</thead>
					<tbody>
						{this.props.orders.map((item, i) => {
							return (
								<tr key={item._id} className="middle">
									<td>{i + 1}</td>
									<td>
										<img className="u-md-image" src={item.product.imageUrl} alt={item.product.name} />
									</td>
									<td>{item.product.name}</td>
									<td>Rs. {item.product.price}.00</td>
									<td> {item.date}</td>
									{/* <td>
										<span className="snippet-btn">
											<button className="ui-btn  bg-color-red">-</button>
											<span className="u-sm-pd">2</span>
											<button className="ui-btn bg-color-primary">+</button>
										</span>
									</td> */}
								</tr>
							);
						})}
					</tbody>
				</Table>
			</div>
		);
	}

	noOrders() {
		return (
			<div className="no-products">
				<h3 className="u-mb-md"> Your Don't have any orders.</h3>
				<p className="u-mb-sm"> Start Shopping now, you can order books, CDs, videos, DVDs and more. </p>
				Continue shopping on the <Link to="/">Book-Shelf</Link> homepage.
			</div>
		);
	}

	renderOrders() {
		return this.props.orders.length ? this.showOrders() : this.noOrders();
	}
	render() {
		return (
			<div>
				<div>{this.renderOrders()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { orders: state.orders, auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ fetchOrders }
)(UserOrders);
