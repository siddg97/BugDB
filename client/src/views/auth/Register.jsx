import React from 'react';
import { Button, Card, Row, Col, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions.js';

const { Title, Text } = Typography;

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			email:'',
			password:'',
			password2:'',
			errors: {}
		}
	}

	componentDidMount() {
		if (this.props.auth.userLoggedIn){
			this.props.history.push('/app')
		}
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		this.setState({[e.target.id]:e.target.value})
	}

	onSubmit = e => {
		e.preventDefault();
		const { name, email, password, password2 } = this.state;
		const newUser = {
			name: name,
			email: email,
			password: password,
			password2: password2
		};
		this.props.registerUser(newUser, this.props.history);
	}

	render() {
		const { name, email, password, password2, errors } = this.state;
		const rowStyle={padding:16}
		const cardStyle={background:'#141414'}
		const inputStyle={backgroundColor:'#640D14',color:'white',border:0,borderRadius:0, fontWeight:500, fontFamily:'Roboto Mono'}
		return (
			<Row type='flex' align='middle' justify='center' style={{height:'90vh'}}>
				<Col span={14}>
					<Card bordered={false} bodyStyle={cardStyle}>
						<Row type='flex' gutter={32} style={rowStyle}>
							<Col span={2}>
								<Link to='/'>
									<Button block type='danger' icon='arrow-left'/>
								</Link>
							</Col>
							<Col span={12}>
								<Title style={{color:'white'}}level={4}>Sign Up for a free account </Title>
							</Col>
						</Row>
						<form onSubmit={this.onSubmit}>
							<Row gutter={32} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='text' placeholder='Your full name...' id='name' value={name} onChange={this.onChange}/>
									{ errors.name ? <Text type='danger'>{errors.name}</Text> : '' }
								</Col>
							</Row>
							<Row gutter={24} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='text' placeholder='Your e-mail...' id='email' value={email} onChange={this.onChange}/>
									{ errors.email ? <Text type='danger'>{errors.email}</Text> : '' }
								</Col>
							</Row>
							<Row gutter={24} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='password' placeholder='Password...' id='password' value={password} onChange={this.onChange}/>
									{ errors.password ? <Text type='danger'>{errors.password}</Text> : '' }
								</Col>
							</Row>
							<Row gutter={24} type='flex' justify='start' align='middle' style={rowStyle}>
								<Col span={24}>
									<input type='password' placeholder='Confirm password...' id='password2' value={password2} onChange={this.onChange}/>
									{ errors.password2 ? <Text type='danger'>{errors.password2}</Text> : '' }
								</Col>
							</Row>
							<Row type='flex' gutter={32} justify='start' align='middle' style={rowStyle}>
								<Col span={12}>
									<Button block onClick={this.onSubmit} style={inputStyle}>Register</Button>
								</Col>
								<Col span={12}>
									<center>
										<Text type='danger'>Already have an account? </Text>
										<Link to='/login'>
											<Button type='link'> Sign In </Button>
										</Link>
									</center>
								</Col>
							</Row>
						</form>
					</Card>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register));