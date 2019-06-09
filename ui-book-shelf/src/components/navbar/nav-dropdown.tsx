import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth-actions';

export interface NavDropDownProps {
	auth: {
		isAuthenticated: boolean;
		user: {
			isAdmin?: boolean;
		};
	};
	logout: Function;
}
class NavDropDown extends React.Component<NavDropDownProps> {
	state = { on: false };

	logout = (e: any) => {
		e.preventDefault();
		this.props.logout();
	};

	adminLinks = () => {
		return (
			<div className="nav__dropdown">
				<Link to="/profile">Edit Profile</Link>
				<Link to="/orders">Manage Orders</Link>
				<Link to="/products">Manage Products</Link>
				<Link to="/product">Create Products</Link>
				<Link to="/" onClick={this.logout}>
					Logout
				</Link>
			</div>
		);
	};

	userLinks = () => {
		return (
			<div className="nav__dropdown">
				<Link to="/profile">Edit Profile</Link>
				<Link to="/orders">Orders</Link>
				<Link to="/" onClick={this.logout}>
					Logout
				</Link>
			</div>
		);
	};

	toggle = () => {
		this.setState({ on: !this.state.on });
	};

	handleClickOutside = (evt: any) => {
		this.setState({ on: false });
	};

	getDropDownClassName = () => {
		const { on } = this.state;
		return `nav__action ${on ? '' : 'hidden'}`;
	};

	renderSignInOptions() {
		return (
			<div>
				<Link to="/login" className="color-white">
					Hello, <span>Sign In</span>&nbsp;
				</Link>
			</div>
		);
	}

	renderDropDown() {
		return (
			<div>
				<button className="nav__action" onClick={this.toggle} onMouseOver={() => this.setState({ on: true })}>
					My Account ^
				</button>
				<div className={this.getDropDownClassName()}>{this.props.auth.user.isAdmin ? this.adminLinks() : this.userLinks()}</div>
			</div>
		);
	}

	render() {
		return <div>{this.props.auth.isAuthenticated ? this.renderDropDown() : this.renderSignInOptions()}</div>;
	}
}

const mapStateToProps = (state: any) => {
	return { auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ logout }
)(onClickOutside(NavDropDown));
