import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { registerUser } from '../../redux/actions/authActions.js';
import { connect } from 'react-redux';

class Register extends Component {
	constructor(){
		super();
		this.state = {
			name:'',
			email:'',
			password:'',
			password2:'',
			errors:{}
		}
	}

	componentDidMount(){
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/home');
		}
	}

	static getDerivedStateFromProps(nextProps){
		if(nextProps.errors){
			return {errors:nextProps.errors}
		}
		return null
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2
		}
		this.props.registerUser(newUser, this.props.history);
	}

	handleChange = (e,{ name,value }) => {
		this.setState({
			[name]:value
		});
	}

	render(){
		const { name,email,password,password2,errors } = this.state;
		return (
			<Grid stackable textAlign='center' style={{minHeight:'100vh',margin:0}} verticalAlign='middle'>
				<Grid.Row color='black'>
					<Grid.Column mobile={14} tablet={13} computer={8} widescreen={8}>
						<Header color='red' textAlign='center'>
							<Link to='/'><Icon name='angle double left'/></Link>
							Register to use Links
						</Header>
						<Segment raised>
							<Form size='large'>
								<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									name='name'
									value={name}
									placeholder='Enter full name'
									onChange={this.handleChange}
									error={errors.name}
								/>
								<Form.Input
									fluid
									icon='at'
									iconPosition='left'
									name='email'
									value={email}
									placeholder='Enter E-mail address'
									onChange={this.handleChange}
									error={errors.email}
								/>
								<Form.Input
									fluid
									icon='lock'
									iconPosition='left'
									name='password'
									value={password}
									placeholder='Enter password'
									type='password'
									onChange={this.handleChange}
									error={errors.password}
								/>
								<Form.Input
									fluid
									icon='lock'
									iconPosition='left'
									name='password2'
									value={password2}
									placeholder='Confirm password'
									type='password'
									onChange={this.handleChange}
									error={errors.password2}
								/>
								<Button fluid color='red' size='large' onClick={this.handleSubmit}>
									Sign Up
								</Button>
							</Form>
						</Segment>
						<Message info>
							<Icon name='help'/>
							Already have an account? <Link to='/login'>Sign In</Link>
						</Message>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

Register.propTypes = {
	registerUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
