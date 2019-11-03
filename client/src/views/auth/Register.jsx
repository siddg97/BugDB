import React from 'react';
import { Button, Card, Row, Col, Typography } from 'antd';

const { Title } = Typography;

class Register extends React.Component {
	constructor() {
		super();
		this.state = {
			name:'',
			email:'',
			password:'',
			password2:''
		}
	}

	onChange = e => {
		this.setState({[e.target.id]:e.target.value})
	}

	onSubmit = e => {
		e.preventDefault();
		const { name,email,password } = this.state;
		const newUser = {
			name: name,
			email: email,
			password: password
		};
		console.log(newUser);
	}

	render() {
		const { name, email, password, password2 } = this.state;
		const rowStyle={padding:16}
		const cardStyle={background:'#141414'}
		const inputStyle={backgroundColor:'#640D14',color:'white',border:0,borderRadius:0, fontWeight:500, fontFamily:'Roboto Mono'}
		return (
			<Card bordered={false} bodyStyle={cardStyle}>
				<Row type='flex' style={rowStyle}>
					<Col span={12}>
						<Title style={{color:'white'}}level={4}>Sign Up for a free account </Title>
					</Col>
				</Row>
				<form onSubmit={this.onSubmit}>
					<Row gutter={24} type='flex' justify='start' align='middle' style={rowStyle}>
						<Col span={12}>
							<input type='text' placeholder='Your full name...' id='name' value={name} onChange={this.onChange}/>
						</Col>
						<Col span={12}>
							<input type='text' placeholder='Your e-mail...' id='email' value={email} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row gutter={24} type='flex' justify='start' align='middle' style={rowStyle}>
						<Col span={12}>
							<input type='password' placeholder='Password...' id='password' value={password} onChange={this.onChange}/>
						</Col>
						<Col span={12}>
							<input type='password' placeholder='Confirm password...' id='password2' value={password2} onChange={this.onChange}/>
						</Col>
					</Row>
					<Row type='flex' justify='center' style={rowStyle}>
						<Col span={6}>
							<Button block onClick={this.onSubmit} style={inputStyle}>Register</Button>
						</Col>
					</Row>
				</form>
			</Card>
		);
	}
}

export default Register;