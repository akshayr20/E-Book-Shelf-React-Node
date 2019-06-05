import React from 'react';
import Header from './header';
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
					<Header />
					<Route path="/cart" exact component={ShoppingCart} />
					<Route path="/products" exact component={ProductList} />
					<Route path="/product" exact component={Product} />
					<Route path="/product/:id" component={Product} />
					<Route path="/orders" exact component={UserOrders} />
					<Route path="/profile" exact component={UserProfile} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
