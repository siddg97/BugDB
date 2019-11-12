import React from 'react';
import { getBugs, deleteBug, updateBug } from '../../../redux/actions/bugActions.js';
import { connect } from 'react-redux';

import { Row, Col, Card, Button, Icon, Typography, notification } from 'antd';

const { Text, Title, Paragraph } = Typography;

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
							<Title level={3}>{bug.title}</Title>
							<Text type='danger'>{bug.status}</Text><br/>
							<Text>Opened on: <Text strong>{bug.openedOn.date.day}/{bug.openedOn.date.month}/{bug.openedOn.date.year}</Text></Text><br/>
							<Button type='danger' size='small' onClick={this.onDelete.bind(this,bug._id)}><Icon type='delete' /></Button>
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

export default connect(mapStateToProps, { getBugs, deleteBug, updateBug })(BugGrid);
