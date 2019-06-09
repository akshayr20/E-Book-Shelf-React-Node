import React from 'react';
import { Link } from 'react-router-dom';
import onClickOutside from 'react-onclickoutside';

class NavDropDown extends React.Component<any> {
	state = { on: false, loggedIn: false };

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
				<div className={this.getDropDownClassName()}>
					<div className="nav__dropdown">
						<Link to="/profile">Edit Profile</Link>
						{/* <Link to="/orders">My Orders</Link> */}
						{/* <Link to="/orders">Manage Orders</Link> */}
						{/* <Link to="/products">Manage Products</Link> */}
						<Link to="/product">Create Products</Link>
						<Link to="/logout">Logout</Link>
					</div>
				</div>
			</div>
		);
	}

	render() {
		return <div>{this.state.loggedIn ? this.renderDropDown() : this.renderSignInOptions()}</div>;
	}
}

export default onClickOutside(NavDropDown);
