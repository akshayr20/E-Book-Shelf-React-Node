import React from 'react';
import Search from './search';
import Navbar from './navbar';

export interface HeaderProps {}

const Header: React.SFC<HeaderProps> = () => {
	return (
		<header className="header">
			<a className="logo">
				<img src="/images/logo.jpg" alt="E-Shop logo" />
			</a>
			<Search />
			<div className="nav">
				<Navbar />
			</div>
		</header>
	);
};

export default Header;
