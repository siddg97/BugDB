import React from 'react';
import { Button, Card, Divider, Typography, Row, Col, List, Icon } from 'antd';
import { Switch, Route, Link } from 'react-router-dom';

import Register from './auth/Register.jsx';
import Login from './auth/Login.jsx';

const { Title, Text } = Typography;

const uStories = [
	{
		icon:<Icon type='book' style={{color:'red', fontSize:28}} size='large'/>,
		text:'Bookmark important URLs',
		color:'red'
	},
	{
		icon:<Icon type='folder-open' style={{color:'green', fontSize:28}} size='large'/>,
		text:'Organize your bookmarks in directories',
		color:'green'
	},
	{
		icon:<Icon type='share-alt' style={{color:'blue', fontSize:28}} size='large'/>,
		text:'Easy external sharing of your bookmarks',
		color:'blue'
	},
	{
		icon:<Icon type='cloud-server' style={{color:'blue', fontSize:28}} size='large'/>,
		text:'Centralize your bookmarks across all your devices',
		color:'blue'
	},
];

// eslint-disable-next-line
{/* Title, and welcome content */}
function Head() {
	const style={background:'#000', padding:16, color:'#fff'};
	return (
		<List
			style={style} 
			header={<Title style={{color:'#fff'}} level={1}> Save, organize or share your links in a snap </Title>}
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
			<Col span={6} style={colStyle}>
				<Link to='/login'>
					<Button block type='primary'> Login </Button> 
				</Link>
			</Col>
			<Col span={6} style={colStyle}>
				<Link to='/register'>
					<Button block type='danger'> Register </Button>
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
				<Col span={12}>
					<Head/>
				</Col>
				<Col span={12}>
					<Body/>
				</Col>
			</Row>
		);
	}
}

export default Landing