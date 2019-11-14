import React from 'react';
import { updateBug } from '../../../redux/actions/bugActions.js';
import { connect } from 'react-redux';
import isEmpty from 'is-empty';

import { Row, Col, Button, Icon, Drawer, Typography, notification } from 'antd';

const { Title, Text } = Typography;

class EditBug extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer:false,
			title: this.props.bug.title,
			status: this.props.bug.status,
			description: this.props.bug.description,
			errors: {}
		};
	}

	// open drawer form
	openUpdate = () => {
		this.setState({
			drawer: true
		});
	}

	// close drawer form
	closeUpdate = () => {
		this.setState({
			drawer: false
		});
	}

	// reset form to default
	resetForm = () => {
		this.setState({
			title: this.props.bug.title,
			status: this.props.bug.status,
			description: this.props.bug.description,
			errors: {}
		});
	}

	// send notification of 'type' with title as 'msg' and info as 'desc'
	onNotify = (type,msg,desc) => {
		notification[type]({
			message: msg,
			description: desc
		});
	}

	// handle input change
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	}

	// submit data or show errors
	onSubmit = e => {
		e.preventDefault();
		const { title, status, description } = this.state;

		if(title!=='' && status!=='' && description!==''){ // no errors
			const updatedBug = {
				id: this.props.bug._id,
				title: title,
				status: status,
				description: description
			};

			this.props.updateBug(updatedBug);
			this.closeUpdate();
			this.setState({errors:{}});
			this.onNotify('success','Updated','Successfully updated the bug')
		} else {
			let err = {}
			if(isEmpty(title)){
				err.title = 'Title is a required field'
			}
			if(isEmpty(status)){
				err.status = 'Status is a required field'
			}
			if(isEmpty(description)){
				err.description = 'Description is a required field'
			}
			this.setState({
				errors: err
			});
			this.onNotify('error','Failed','Please validate fields and try again')
		}
	}

	handleEnter = e => {
		if(e.key === 'Enter') {
			this.onSubmit(e);
		}
	}

	render(props) {
		const { title, status, description , errors } = this.state;
		const colStyle = { padding:16 };
		const rowStyle = {minHeight:'100vh', padding:32};
		const drawerStyle = {background: '#ececec'};
		return (
			<div>
				<Button shape='circle' type='primary' size='small' onClick={this.openUpdate}><Icon type="edit" /></Button>
				<Drawer
					visible={this.state.drawer}
					onClose={this.closeUpdate}
					width={'75vw'}
					bodyStyle={drawerStyle}
					placement='left'
				>
					<form onSubmit={this.onSubmit} onKeyPress={this.handleEnter}>
						<Row type='flex' align='top' justify='center' style={rowStyle}>
							<Col span={20} style={colStyle}>
								<Row type='flex' align='top' justify='start'>
									<Col span={24} style={colStyle}>
										<Title level={3}>Edit bug</Title>
									</Col>
									<Col span={24} style={colStyle}>
										<input type='text' placeholder='Enter title...' id='title' value={title} onChange={this.onChange} />
										{ errors.title ? <Text type='danger'>{errors.title}</Text> : '' }
									</Col>
									<Col span={24} style={colStyle}>
										<input type='text' placeholder='Enter status...' id='status' value={status} onChange={this.onChange} />
										{ errors.status ? <Text type='danger'>{errors.status}</Text> : '' }
									</Col>
									<Col span={24} style={colStyle}>
										<textarea rows='10' placeholder='Enter description....' id='description' value={description} onChange={this.onChange} />
										{ errors.description ? <Text type='danger'>{errors.description}</Text> : '' }
									</Col>
									<Col span={6} style={colStyle}>
										<Button shape='round' type='primary' block onClick={this.onSubmit}> Update </Button>
									</Col>
									<Col span={6} style={colStyle}>
										<Button shape='round' type='danger' block onClick={this.resetForm}> Reset </Button>
									</Col>
								</Row>
							</Col>
						</Row>
					</form>
				</Drawer>
			</div>
		)
	}
}

export default connect(null, { updateBug })(EditBug);
