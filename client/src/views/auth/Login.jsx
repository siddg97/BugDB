import React from 'react';
import { Button, Card, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../../redux/actions/authActions.js';

const { Title, Text } = Typography;

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email:'',
			password:'',
			errors: {}
		}
	}

	componentDidMount() {
		if (this.props.auth.userLoggedIn) {
			this.props.history.push('/home')
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.auth.userLoggedIn) {
			this.props.history.push('/home');
		} else{
			if(nextProps.errors) {
				this.setState({errors: nextProps.errors});
			}
		}
	}

	onChange = e => {
		this.setState({
			[e.target.id]:e.target.value
		});
	}

	onSubmit = e => {
		e.preventDefault();
		const { email, password } = this.state;
		const userData = {
			email: email,
			password: password
		}
		this.props.loginUser(userData);
	}

	render() {
		const { email, password, errors } = this.state;
		const rowStyle={padding:16}
		const colStyle={padding:16}
		const cardStyle={background:'#ececec'}
		return (
			<Row type='flex' align='middle' justify='center' style={{height:'90vh'}}>
				<Col span={14} style={colStyle}>
					<Card
						bordered={false}
						bodyStyle={cardStyle}
					>
						<Row type='flex' justify='start' align='middle' gutter={32} style={rowStyle}>
							<Col span={2}>
								<Link to='/'>
										<Button block type='link' icon='arrow-left'/>
									</Link>
							</Col>
							<Col span={10}>
								<Title level={4}>Log In</Title>
							</Col>
						</Row>
						<form onSubmit={this.onSubmit}>
							<Row gutter={32} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='text' placeholder='Your e-mail...' id='email' value={email} onChange={this.onChange}/>
									{ errors.email ? <Text type='danger'>{errors.email}</Text> : '' }
								</Col>
							</Row>
							<Row gutter={32} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='password' placeholder='Password...' id='password' value={password} onChange={this.onChange}/>
									{ errors.password ? <Text type='danger'>{errors.password}</Text> : '' }
								</Col>
							</Row>
							<Row type='flex' gutter={32} justify='start' align='middle' style={rowStyle}>
								<Col span={8}>
									<Button type='primary' block size='large' onClick={this.onSubmit}>Login</Button>
								</Col>
								<Col span={16}>
									<center>
										<Text type='danger'> Dont have an account? </Text>
										<Link to='/register'>
											<Button type='link' size='large'>Sign Up</Button>
										</Link>
									</center>
								</Col>
							</Row>
						</form>
					</Card>
				</Col>
			</Row>

		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { loginUser })(Login);
