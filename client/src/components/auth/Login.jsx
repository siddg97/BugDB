import React, { Component } from 'react';
import { Button, Form, Grid, Header, Icon, Message, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { loginUser } from '../../redux/actions/authActions.js';
import { connect } from 'react-redux';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			errors:{}
		};
	}

	componentDidMount(){
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/home');
		}
	}

	componentDidUpdate(){
		if(this.props.auth.isAuthenticated) {
			this.props.history.push('/home');
		}
	}

	static getDerivedStateFromProps(nextProps) {
			if(nextProps.errors){
				return {errors: nextProps.errors}
			}
			return null;
	}

	handleChange = (e, { name,value }) => {
		this.setState({
			[name]:value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.loginUser(data);
	}

	render() {
		const { email,password,errors } = this.state;
		return (
			<Grid stackable textAlign='center' style={{minHeight:'100vh',margin:0}} verticalAlign='middle'>
				<Grid.Row color='black'>
					<Grid.Column mobile={14} tablet={12} computer={6} widescreen={6}>
						<Header color='olive' textAlign='left'>
							<Link to='/'><Icon name='angle double left'/></Link>
							Login to Links
						</Header>
						<Segment raised>
							<Form size='large'>
								<Form.Input
									name='email'
									value={email}
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									onChange={this.handleChange}
									error={errors.email}
								/>
								<Form.Input
									name='password'
									value={password}
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
									onChange={this.handleChange}
									error={errors.password}
								/>
								<Button fluid color='olive' size='large' onClick={this.handleSubmit}>
									Login
								</Button>
							</Form>
						</Segment>
						<Message info>
							<Icon name='help'/>
							New to Links? <Link to='/register'>Register</Link>
						</Message>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

Login.propTypes = {
	loginUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps,{ loginUser })(Login);
