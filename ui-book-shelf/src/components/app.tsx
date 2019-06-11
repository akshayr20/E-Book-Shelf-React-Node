import React from 'react';
import Navbar from './navbar';
import { BrowserRouter, Route } from 'react-router-dom';
import ShoppingCart from './shopping-cart';
import Product from './admin/product-form';
import ProductList from './admin/edit-products';
import UserOrders from './user/user-orders';
import UserProfile from './user/user-profile';
import Login from './authentication/login';
import SignUp from './authentication/sign-up';
import LandingScreen from './user/products-list';

export interface AppProps {}

export interface AppState {}

class App extends React.Component<AppProps, AppState> {
	render() {
		return (
			<div className="app-container">
				<BrowserRouter>
					<Navbar />
					<Route path="/" exact component={LandingScreen} />
					<Route path="/cart" component={ShoppingCart} />
					<Route path="/product" exact component={Product} />
					<Route path="/product/:id" component={Product} />
					<Route path="/products" exact component={ProductList} />
					<Route path="/orders" component={UserOrders} />
					<Route path="/profile" component={UserProfile} />
					<Route path="/login" component={Login} />
					<Route path="/sign-up" component={SignUp} />
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
