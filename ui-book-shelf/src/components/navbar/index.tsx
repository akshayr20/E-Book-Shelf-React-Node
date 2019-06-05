import React from 'react';
import Search from './search';
import NavDropDown from './nav-dropdown';
import { Link } from 'react-router-dom';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<header className="header">
			<Link to="/" className="logo">
				<img src="/images/logo.jpg" alt="E-Shop logo" />
			</Link>
			<Search />
			<div className="nav">
				<NavDropDown />
				<div>
					<Link to="/login" className="color-white">
						Login&nbsp;
					</Link>
					<span className="color-white">/</span>
					<Link to="/sign-up" className="color-white">
						&nbsp;Sign Up
					</Link>
				</div>

				<Link to="/cart" className="color-white">
					My CART
				</Link>
			</div>
		</header>
	);
};

export default Header;
