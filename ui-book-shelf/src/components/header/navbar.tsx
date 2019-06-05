import React from 'react';
import NavDropDown from './nav-dropdown';
export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
	return (
		<div className="nav">
			<NavDropDown />
			<a className="color-primary">My CART</a>
		</div>
	);
};

export default Navbar;
