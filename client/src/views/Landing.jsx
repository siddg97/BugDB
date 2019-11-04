import React from 'react';
import { Button, Card, Divider, Typography, Row, Col, List, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Text } = Typography;

const uStories = [
	{
		icon:<Icon type='bug' style={{color:'red', fontSize:28}}/>,
		text:'Track multiple bugs for your projects',
		color:'red'
	},
	{
		icon:<Icon type='sort-ascending' style={{color:'green', fontSize:28}}/>,
		text:'Assign priorities for each bug you wish to track',
		color:'green'
	},
	{
		icon:<Icon type='layout' style={{color:'blue', fontSize:28}} />,
		text:'Minimalistic UI for optimized tracking experience',
		color:'blue'
	},
	{
		icon:<Icon type='cloud-server' style={{color:'blue', fontSize:28}}/>,
		text:'Centralize your bugs across all your devices',
		color:'blue'
	},
	{
		icon:<Icon type='bar-chart' style={{color:'gray', fontSize: 28}}/>,
		text:'Analyze your bug squashing performance',
		color:'gray'
	}
];

// eslint-disable-next-line
{/* Title, and welcome content */}
function Head() {
	const style={background:'#000', padding:16, color:'#fff'};
	return (
		<List
			style={style} 
			header={<Title style={{color:'#fff'}} level={1}> Start your painless bug tracking experience </Title>}
			dataSource={uStories}
			renderItem={story => <Card bordered hoverable title={<Text strong>{story.text}</Text>}>{story.icon}</Card>}
		/>
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

export default Landing