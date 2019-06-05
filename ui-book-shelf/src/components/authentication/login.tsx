import React from 'react';
import { Link } from 'react-router-dom';

export interface LoginProps {}

class Login extends React.Component<LoginProps> {
	render() {
		return (
			<div className="popup">
				<div className="auth">
					<form className="form">
						<div>
							<h2 className="center-text u-mb-sm">Login</h2>
						</div>
						<h3 className="u-mb-sm">
							Don't have an account?
							<Link to="sign-up" className="color-primary">
								&nbsp;Sign Up Now
							</Link>
						</h3>

						<input className="input-primary" type="text" placeholder="Enter Email" />
						<input className="input-primary" type="password" placeholder="Enter Password" />
						<div className="form__btn">
							<button className="ui-btn ui-btn__primary">SIGN IN</button>
							<Link to="/" className="ui-btn ui-btn__white">
								CANCEL
							</Link>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
