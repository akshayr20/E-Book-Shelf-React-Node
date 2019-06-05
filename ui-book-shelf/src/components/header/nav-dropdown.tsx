import React from 'react';
import onClickOutside from 'react-onclickoutside';

class NavDropDown extends React.Component<any> {
	state = { isDropDownVisible: false };

	onShowDropDown = () => {
		this.setState({ isDropDownVisible: true });
	};

	handleClickOutside = (evt: any) => {
		this.setState({ isDropDownVisible: false });
	};

	renderDropDown() {
		return (
			<div className="nav__action">
				<span>
					<a className="nav__link">Sign In</a> /<a className="nav__link">Sign up</a>
				</span>
				<div className="account">
					<div className="account__dropdown">
						<a> My Account</a>
						<a> My Orders</a>
						<a> Manage Orders</a>
						<a> Manage Products</a>
						<a> Logout</a>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return this.state.isDropDownVisible ? (
			this.renderDropDown()
		) : (
			<button className="nav__action" onClick={this.onShowDropDown}>
				My Account ^
			</button>
		);
	}
}

export default onClickOutside(NavDropDown);
