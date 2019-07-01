import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";


class Signup extends Component {
	constructor() {
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			conf_pass: "",
			errs: {}
		};
	}

	componentDidMount() {
		// If logged in and user navigates to Register page, should redirect them to dashboard
		if (this.props.auth.isAuthenticated) {
			this.props.history.push("/dashboard");
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.errors) {
			this.setState({
				errs: nextProps.errors
			});
		}
	}
	
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	};
	
	onSubmit = e => {
		e.preventDefault();
	
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			conf_pass: this.state.conf_pass
		};
		console.log(newUser);
		this.props.registerUser(newUser,this.props.history);
	};

	

	render() {
		const { errs } = this.state;
		return (
			<div className="container" style={{height:"75vh"}}>
				<div className="row">
					<div className="col s8 offset-s2">
						<Link to="/" className="btn-flat waves-effect">
							<i className="material-icons left">keyboard_backspace</i> Back to
							home
						</Link>
						<div className="col s12" style={{ paddingLeft: "11.250px" }}>
							<h4>
								<b>Register</b> below
							</h4>
							<p className="grey-text text-darken-1">
								Already have an account? <Link to="/login">Log in</Link>
							</p>
						</div>
						<form noValidate onSubmit={this.onSubmit}>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.name}
									error={errs.name}
									id="name"
									type="text"
									className={classnames("",{
										invalid: errs.name
									})}
								/>
								<label htmlFor="name">Name</label>
								<span className="red-text">{errs.name}</span>
							</div>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.email}
									error={errs.email}
									id="email"
									type="email"
									className={classnames("",{
										invalid: errs.email
									})}
								/>
								<label htmlFor="email">Email</label>
								<span className="red-text">{errs.email}</span>
							</div>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.password}
									error={errs.password}
									id="password"
									type="password"
									className={classnames("",{
										invalid: errs.password
									})}
								/>
								<label htmlFor="password">Password</label>
								<span className="red-text">{errs.password}</span>
							</div>
							<div className="input-field col s12">
								<input
									onChange={this.onChange}
									value={this.state.conf_pass}
									error={errs.conf_pass}
									id="conf_pass"
									type="password"
									className={classnames("",{
										invalid: errs.conf_pass
									})}
								/>
								<label htmlFor="conf_pass">Confirm Password</label>
								<span className="red-text">{errs.conf_pass}</span>
							</div>
							<div className="col s12" style={{ paddingLeft: "11.250px" }}>
								<button
									style={{
										width: "150px",
										borderRadius: "3px",
										letterSpacing: "1.5px",
										marginTop: "1rem"
									}}
									type="submit"
									className="btn btn-large waves-effect waves-light hoverable yellow darken-4"
								>
									Sign up
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	}
}

Signup.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(
	mapStateToProps,
	{registerUser}
)(withRouter(Signup));