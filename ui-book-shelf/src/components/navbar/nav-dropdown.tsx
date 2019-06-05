import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class NavDropDown extends React.Component<any> {
	state = { isDropDownVisible: false };

	onShowDropDown = () => {
		this.setState({ isDropDownVisible: !this.state.isDropDownVisible });
	};

	handleClickOutside = (evt: any) => {
		this.setState({ isDropDownVisible: false });
	};

	getDropDownClassName = () => {
		const { isDropDownVisible } = this.state;
		return `nav__action ${isDropDownVisible ? '' : 'hidden'}`;
	};

	renderDropDown() {
		return (
			<div>
				<button className="nav__action" onClick={this.onShowDropDown}>
					My Account ^
				</button>
				<div className={this.getDropDownClassName()}>
					<div className="nav__dropdown">
						<Link to="/profile">Edit Profile</Link>
						<Link to="/orders">My Orders</Link>
						<Link to="/orders">Manage Orders</Link>
						<Link to="/products">Manage Products</Link>
						<Link to="/logout">Logout</Link>
					</div>
				</div>
			</div>
		);
	}

	// <Link to="/login" className="nav__action">
	// 						Login
	// 					</Link>
	// 					/
	// 					<Link to="/sign-up" className="nav__action">
	// 						Sign up
	// 					</Link>

	render() {
		return this.renderDropDown();
	}
}

export default onClickOutside(NavDropDown);
