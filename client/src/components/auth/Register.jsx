import React from 'react';
import { Link } from 'react-router-dom';

class Register extends React.Component {
	constructor(){
		super();
		this.state = {
			name:"",
			email:"",
			username:"",
			pass:"",
			pass2:"",
			errors:{}
		};
	}

	onChange = e => {
		this.setState({ [e.target.id]:e.target.value });
	};

	onSubmit = e => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			username: this.state.username,
			pass: this.state.pass,
			pass2: this.state.pass2
		};
		console.log(newUser);
	}

	render(){
		const { errors } = this.state;
		return (
			<div className="container">
				<div className='row'>
					<div className='col s8 offset-s2'>
						<Link
							to="/"
							className="btn-flat waves-effect"
						>
							<i className="material-icons left">keyboard_backspace</i>
							Back to <b>Home</b>
						</Link>
						<div className="col s12" style={{padding: 24}}>
							<h4><b>Register</b> below </h4>
							<p className="grey-text text-darken-1">
								Already have an account? <Link to="/login">Log In</Link>
							</p>
						</div>
					</div>
					<form noValidate onSubmit={this.onSubmit}>
						<div className="input-field col s12">
							<input
								id='name'
								value={this.state.name}
								error={errors.name}
								type="text"
								onChange={this.onChange}
							/>
							<label htmlFor="name">Name</label>
						</div>
						<div className='input-field col s12'>
							<input
								id='email'
								value={this.state.email}
								error={errors.email}
								type="email"
								onChange={this.onChange}
							/>
							<label htmlFor="email">Email</label>
						</div>
						<div className='input-field col s12'>
							<input
								id='username'
								value={this.state.username}
								error={errors.username}
								type="text"
								onChange={this.onChange}
							/>
							<label htmlFor="username">Username</label>
						</div>
						<div className='input-field col s12'>
							<input
								id='pass'
								value={this.state.pass}
								error={errors.pass}
								type="password"
								onChange={this.onChange}
							/>
							<label htmlFor="pass">Password</label>
						</div>
						<div className='input-field col s12'>
							<input
								id='pass2'
								value={this.state.pass2}
								error={errors.pass2}
								type="password"
								onChange={this.onChange}
							/>
							<label htmlFor="pass2">Confirm Password</label>
						</div>
						<div className="col s12" style={{padding:24}}>
							<button
								style={{
									width:'150px',
									borderRadius:'3px',
									letterSpacing:'1.5px',
									marginTop:'1rem'
								}}
								type='submit'
								className="btn btn-large waves-effect waves-light hoverable blue accent-3"
							>
								Sign Up
							</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
