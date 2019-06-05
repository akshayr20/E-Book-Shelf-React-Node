import React from 'react';
import Navbar from './navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './shopping-cart';
import Product from './admin/product';
import ProductList from './admin/product-list';
import UserOrders from './user/user-orders';
import UserProfile from './user/user-profile';

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<Navbar />
					<div>
						<Route path="/cart" component={ShoppingCart} />
						<Route path="/product" exact component={Product} />
						<Route path="/product/:id" component={Product} />
						<Route path="/products" exact component={ProductList} />
						<Route path="/orders" component={UserOrders} />
						<Route path="/profile" component={UserProfile} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
