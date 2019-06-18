import React from 'react';
import { login } from '../../actions/auth-actions';
import { Link, Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';

export interface LoginProps {
	login: Function;
	auth: {
		isAuthenticated: boolean;
		user: {};
	};
}

class Login extends React.Component<LoginProps> {
	state = { email: '', password: '' };

	handleSubmit = (event: any) => {
		event.preventDefault();
		this.props.login(this.state);
	};

	render() {
		return <div>{!this.props.auth.isAuthenticated ? this.LoginPage() : <Redirect to="/" />}</div>;
	}

	private LoginPage() {
		return (
			<div className="popup">
				<div className="auth">
					<div className="form">
						<h2 className="center-text u-mb-sm">Login</h2>
						<h3 className="u-mb-sm">
							Don't have an account?
							<Link to="sign-up" className="color-primary">
								&nbsp; Sign Up Now
							</Link>
						</h3>

						<Form onSubmit={(e: any) => this.handleSubmit(e)}>
							<Form.Group controlId="formGroupEmail">
								<Form.Label>Email Id</Form.Label>
								<Form.Control required type="email" placeholder="Enter email" value={this.state.email} onChange={(event: any) => this.setState({ email: event.target.value })} />
							</Form.Group>
							<Form.Group controlId="formGroupPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Enter Description"
									value={this.state.password}
									onChange={(event: any) => this.setState({ password: event.target.value })}
								/>
							</Form.Group>
							<div className="form__btn">
								<button className="ui-btn ui-btn__primary">SIGN IN</button>
								<Link to="/" className="ui-btn ui-btn__white">
									CANCEL
								</Link>
							</div>
						</Form>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state: any) => {
	return { auth: state.auth };
};

export default connect(
	mapStateToProps,
	{ login }
)(Login);
