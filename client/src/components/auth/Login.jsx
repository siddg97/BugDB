import React, { Component } from 'react';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

class Login extends Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = (event) => {
		this.setState({[event.taget.id]:event.target.value});
	}

	render() {
		return (
			<Grid stackable textAlign='center' style={{minHeight:'100vh',margin:0}} verticalAlign='middle'>
				<Grid.Row color='black'>
					<Grid.Column mobile={14} tablet={12} computer={5} widescreen={6}>
						<Header color='olive' textAlign='center'>
							Welcome to Links!
						</Header>
						<Form size='large' inverted>
							
								<Form.Input
									fluid
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
								/>
								<Form.Input
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
								/>
								<Button color='olive' fluid size='large'>
									Login
								</Button>
							
							<Message>
								{/* eslint-disable-next-line*/}
								New to Links? <a href='#'>Register</a>
							</Message>
						</Form>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}

export default Login
