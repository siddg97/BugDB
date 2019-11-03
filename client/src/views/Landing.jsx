import React from 'react';
import { Divider, Typography, Row, Col, List, Icon } from 'antd';

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
	const rowStyle = {padding:16};
	return (
		<List
			style={{background:'#fff', padding:16, borderRadius:10}} 
			header={<Title level={1}> Save, organize or share your links in a snap </Title>}
			dataSource={uStories}
			renderItem={story => <List.Item>{story.icon}{'    '}<Text strong>{story.text}</Text></List.Item>}
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
				<Login />
			</Col>
			<Col span={24} style={colStyle}>
				<Divider> <Title style={{color:'white'}}level={4}>OR</Title></Divider>
			</Col>
			<Col span={24} style={colStyle}>
				<Register />
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