import React from 'react';
import { Link } from 'react-router-dom';

export interface SignUpProps {}

const SignUp: React.SFC<SignUpProps> = () => {
	return (
		<div className="popup">
			<div className="auth">
				<form className="form">
					<div>
						<h2 className="center-text u-mb-sm">Sign Up</h2>
					</div>
					<h3 className="u-mb-sm">
						Already have an account?
						<Link to="login" className="color-primary">
							&nbsp;Login In Now
						</Link>
					</h3>

					<input className="input-primary" type="text" placeholder="Enter Your Name" />
					<input className="input-primary" type="text" placeholder="Enter Email" />
					<input className="input-primary" type="password" placeholder="Enter Password" />
					<div className="form__btn">
						<button className="ui-btn ui-btn__primary">SIGN UP</button>
						<Link to="/" className="ui-btn ui-btn__white">
							CANCEL
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
