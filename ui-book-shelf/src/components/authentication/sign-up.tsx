import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createAccount } from '../../actions';

export interface SignUpProps {
	createAccount: Function;
}

class SignUp extends React.Component<SignUpProps> {
	state = { name: '', email: '', password: '' };

	handleSubmit = (event: any) => {
		event.preventDefault();
		this.props.createAccount(this.state);
	};

	render() {
		return (
			<div className="popup">
				<div className="auth">
					<div className="form">
						<div>
							<h2 className="center-text u-mb-sm">Sign Up</h2>
						</div>
						<h3 className="u-mb-sm">
							Already have an account?
							<Link to="login" className="color-primary">
								&nbsp;Login In Now
							</Link>
						</h3>

						<Form onSubmit={(e: any) => this.handleSubmit(e)}>
							<Form.Group controlId="formGroupName">
								<Form.Label>Name</Form.Label>
								<Form.Control required type="text" placeholder="Enter name" value={this.state.name} onChange={(event: any) => this.setState({ name: event.target.value })} />
							</Form.Group>
							<Form.Group controlId="formGroupEmail">
								<Form.Label>Email Id</Form.Label>
								<Form.Control required type="email" placeholder="Enter email" value={this.state.email} onChange={(event: any) => this.setState({ email: event.target.value })} />
							</Form.Group>
							<Form.Group controlId="formGroupPassword">
								<Form.Label>Password</Form.Label>
								<Form.Control
									required
									type="password"
									placeholder="Enter Password"
									value={this.state.password}
									onChange={(event: any) => this.setState({ password: event.target.value })}
								/>
							</Form.Group>
							<div className="form__btn">
								<button className="ui-btn ui-btn__primary">SIGN UP</button>
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

export default connect(
	null,
	{ createAccount }
)(SignUp);
