import React from 'react';
import { Button, Card, Divider, Typography, Row, Col, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const { Text } = Typography;

const uStories = [
	{
		icon:<Icon type='bug' style={{color:'green', fontSize:40}}/>,
		text:'Track bugs',
		color:'green'
	},
	{
		icon:<Icon type='sort-ascending' style={{color:'green', fontSize:40}}/>,
		text:'bug priorities',
		color:'green'
	},
	{
		icon:<Icon type='layout' style={{color:'blue', fontSize:40}} />,
		text:'Minimalistic UI',
		color:'blue'
	},
	{
		icon:<Icon type='cloud-server' style={{color:'blue', fontSize:40}}/>,
		text:'Cloud for bugs',
		color:'blue'
	},
	{
		icon:<Icon type='bar-chart' style={{color:'red', fontSize: 40}}/>,
		text:'Bug analytics',
		color:'red'
	},
	{
		icon:<Icon type='share-alt' style={{color:'red', fontSize: 40}}/>,
		text:'Share bugs',
		color:'red'
	}
];

// eslint-disable-next-line
{/* Title, and welcome content */}
function Head() {
	const style={minHeight:'70vh', background:'#ececec', padding:32};
	const colStyle = {padding:16}
	return (
		<div style={style}>
			<Row type='flex' align='middle' justify='center' gutter={16}>
			{
				uStories.map( (item,i) =>
					<Col key={i} span={12} style={colStyle}>
						<Card title={<center><Text style={{color:item.color, fontFamily: 'Roboto mono'}}>{item.text}</Text></center>}>
							<center>{item.icon}</center>
						</Card>
					</Col>
				)
			}
			</Row>
		</div>
	)
}

// eslint-disable-next-line
{/* Login and Register forms */}
function Body() {
	const colStyle={padding:8};
	return (
		<Row type='flex' gutter={32} justify='center' align='middle'>
			<Col span={24} style={colStyle}>
				<Link to='/login'>
					<Button block icon='login' type='primary'>
						Login
					</Button>
				</Link>
			</Col>
			<Col span={24}>
				<Divider style={{color:'#fff'}}> OR </Divider>
			</Col>
			<Col span={24} style={colStyle}>
				<Link to='/register'>
					<Button block icon='user-add' type='danger'>
						Register
					</Button>
				</Link>
			</Col>
		</Row>
	)
}

class Landing extends React.Component {
	componentDidMount() {
		if(this.props.auth.userLoggedIn){
			this.props.history.push('/home');
		}
	}

	render() {
		const wrapperStyle = {padding:32};
		return (
			<Row type='flex' gutter={48} align='middle' justify='center' style={wrapperStyle}>
				<Col span={14}>
					<Head/>
				</Col>
				<Col span={10}>
					<Body/>
				</Col>
			</Row>
		);
	}
}

const mapStateToProps = state => ({
	auth:state.auth
});

export default connect(mapStateToProps)(Landing);
