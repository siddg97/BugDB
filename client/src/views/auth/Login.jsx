import React from 'react';
import { Button, Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

class Login extends React.Component {
	constructor() {
		super();
		this.state = {
			email:'',
			password:''
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
		console.log(userData);
	}

	render() {
		const { email, password } = this.state;
		const rowStyle={padding:16}
		const cardStyle={background:'#141414'}
		const inputStyle={backgroundColor:'#640D14',color:'white',border:0,borderRadius:0, fontWeight:500, fontFamily:'Roboto Mono'}
		return (
			<Card bordered={false} bodyStyle={cardStyle}>
				<Row type='flex' style={rowStyle}>
					<Col span={12}>
						<Title style={{color:'white'}}level={4}>Log In</Title>
					</Col>
				</Row>
				<form onSubmit={this.onSubmit}>
					<Row gutter={32} type='flex' justify='start' align='middle' style={rowStyle}>
						<Col span={24}>
							<input type='text' placeholder='Your e-mail...' id='email' value={email} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row gutter={32} type='flex' justify='start' align='middle' style={rowStyle}>
						<Col span={24}>
							<input type='password' placeholder='Password...' id='password' value={password} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row type='flex' justify='center' style={rowStyle}>
						<Col span={6}>
							<Button type='danger' style={inputStyle} block onClick={this.onSubmit}>Login</Button>
						</Col>
					</Row>
				</form>		
			</Card>
		)
	}
}

export default Login