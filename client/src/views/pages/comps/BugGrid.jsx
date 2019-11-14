import React from 'react';
import { getBugs, deleteBug } from '../../../redux/actions/bugActions.js';
import { connect } from 'react-redux';

import { Row, Col, Card, Button, Icon, Typography, notification } from 'antd';
import EditBug from './EditBug.jsx';
import ExpandBug from './ExpandBug.jsx';

const { Text, Title } = Typography;

class BugGrid extends React.Component {
	componentDidMount() {
		this.props.getBugs(this.props.auth.user.id);
	}

	// send notification of 'type' with title as 'msg' and info as 'desc'
	onNotify = (type,msg,desc) => {
		notification[type]({
			message: msg,
			description: desc
		});
	}

	// delete the bug with _id===id
	onDelete = id => {
		this.props.deleteBug(id);
		this.onNotify('success','Deleted','Successfully deleted bug');
	}

	render(){
		const colStyle={padding:8};
		const cardStyle={background:'#ececec',cursor:'auto'}
		return (
			<Row type='flex' align='top' justify='start'>
			{
				this.props.bugs.bugList.map((bug,i) =>
					<Col key={i} span={8} style={colStyle}>
						<Card hoverable bordered bodyStyle={cardStyle}>
							<Row type='flex' align='middle' justify='start'>
								<Col span={24} style={colStyle}>
									<Title level={3}>{bug.title}</Title>
								</Col>
								<Col span={24} style={colStyle}>
									<Text strong> STATUS: </Text><Text type='danger'>{bug.status}</Text>
								</Col>
								<Col span={24} style={colStyle}>
									<Text strong>OPENED ON: </Text><Text>{bug.openedOn.date.day}/{bug.openedOn.date.month}/{bug.openedOn.date.year}</Text>
								</Col>
								<Col span={18} style={colStyle}>
									<ExpandBug bug={bug} />
								</Col>
								<Col span={3} style={colStyle}>
									<EditBug bug={bug} />
								</Col>
								<Col span={3} style={colStyle}>
									<Button shape='circle' type='danger' size='small' onClick={this.onDelete.bind(this,bug._id)}><Icon type='delete' /></Button>
								</Col>
							</Row>
						</Card>
					</Col>
				)
			}
			</Row>
		)
	}
}

const mapStateToProps = state => {
	return {
		auth: state.auth,
		bugs: state.bugs
	}
}

export default connect(mapStateToProps, { getBugs, deleteBug })(BugGrid);
