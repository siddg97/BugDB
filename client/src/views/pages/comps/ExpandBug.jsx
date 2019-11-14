import React from 'react';
import { deleteBug } from '../../../redux/actions/bugActions.js';

import { Icon, Button, Drawer, Typography, Descriptions, Row, Col, Card, notification } from 'antd';
import EditBug from './EditBug.jsx';

const { Title } = Typography;

class ExpandBug extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer: false
		};
	}

	// send notification of 'type' with title as 'msg' and info as 'desc'
	onNotify = (type,msg,desc) => {
		notification[type]({
			message: msg,
			description: desc
		});
	}

	openBug = () => {
		this.setState({
			drawer: true
		});
	}

	closeBug = () => {
		this.setState({
			drawer: false
		});
	}

	// delete the bug with _id===id
	onDelete = id => {
		this.props.deleteBug(id);
		this.onNotify('success','Deleted','Successfully deleted bug');
	}

	render(props) {
		const { bug } = this.props;
		const { day, month, year } = bug.openedOn.date;
		const colStyle = {padding:16};
		const rowStyle = {minHeight:'100vh', padding:32};
		const cardStyle = {cursor:'auto'};
		const drawerStyle = {background: '#ececec'};
		return (
			<div>
				<Button size='small' shape='round' onClick={this.openBug}>Expand</Button>
				<Drawer
					visible={this.state.drawer}
					onClose={this.closeBug}
					width={'75vw'}
					bodyStyle={drawerStyle}
					placement='left'
				>
					<Row type='flex' align='top' justify='center' style={rowStyle}>
						<Col span={20} style={colStyle}>
							<Card bordered={false} hoverable style={cardStyle}>
								<Row type='flex' align='middle' justify='center'>
									<Col span={20} style={colStyle}>
										<Title level={1}>Bug details</Title>
									</Col>
									<Col span={2} style={colStyle}>
										<EditBug bug={bug}/>
									</Col>
									<Col span={2} style={colStyle}>
										<Button shape='circle' type='danger' size='small' onClick={this.onDelete.bind(this,bug._id)}><Icon type='delete' /></Button>
									</Col>
									<Col span={24} style={colStyle}>
										<Descriptions column={3} bordered>
											<Descriptions.Item label={<Title level={4}>Title</Title>} span={3}>{bug.title}</Descriptions.Item>
											<Descriptions.Item label={<Title level={4}>Date opened</Title>} span={3}>{day}/{month}/{year}</Descriptions.Item>
											<Descriptions.Item label={<Title level={4}>Opened by</Title>} span={3}>{bug.openedBy}</Descriptions.Item>
											<Descriptions.Item label={<Title level={4}>Status</Title>} span={3}>{bug.status}</Descriptions.Item>
											<Descriptions.Item label={<Title level={4}>Description</Title>} span={3}>{bug.description}</Descriptions.Item>
										</Descriptions>
									</Col>
								</Row>
							</Card>
						</Col>
					</Row>
				</Drawer>
			</div>
		)
	}
}

export default ExpandBug;