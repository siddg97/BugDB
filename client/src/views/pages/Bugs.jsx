import React from 'react';
import { connect } from 'react-redux';
import { addBug } from '../../redux/actions/bugActions.js';
import isEmpty from 'is-empty';

import { Drawer, Button, Icon, Row, Col, Typography, notification } from 'antd';
import BugGrid from './comps/BugGrid.jsx';

const { Title, Text } = Typography;

class Bugs extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			status: '',
			description: '',
			drawer: false,
			errors: {}
		}
	}

	// reset the add bug form fields
	resetForm = () => {
		this.setState({
			title: '',
			status: '',
			description: '',
			errors: {}
		})
	}

	// handle input field changes
	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	}

	// send notification of 'type' with title as 'msg' and info as 'desc'
	onNotify = (type,msg,desc) => {
		notification[type]({
			message: msg,
			description: desc
		});
	}

	// check for errors and dispatch add bug action
	onSubmit = e => {
		e.preventDefault();
		const { title, status, description } = this.state;
		if(title!=='' && status!=='' && description!==''){ // no errors
			const newBug = {
				title: title,
				status: status,
				description: description
			};
			this.props.addBug(newBug);
			this.closeDrawer();
			this.resetForm();
			this.onNotify('success','Success','You have pened a new bug','success-notification');
		} else { 	// errors
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
			this.onNotify('error','Error','Please validate incorrect fields');
		}
	}

	// open addbug form
	openDrawer = () => {
		this.setState( {drawer: true} );
	}

	// close addbug form
	closeDrawer = () => {
		this.setState({ drawer: false	});
	}



	render() {
		const { user } = this.props.auth;
		const { title, status, description, errors } = this.state;
		const colStyle = {padding:16}
		return (
			<div style={{background:'#fff', padding:32}}>
				<h2> Bugs Opened by <b>{user.name}</b> : </h2>
				<BugGrid />
				<center><Button type='primary' onClick={this.openDrawer}><Icon type='plus' size='large'/> New bug</Button></center>
				<Drawer
					visible={this.state.drawer}
					onClose={this.closeDrawer}
					width={'100vw'}
					getContainer={false}
				>
					<form onSubmit={this.onSubmit}>
						<Row type='flex' align='top' justify='center'>
							<Col span={16} style={colStyle}>
								<Row type='flex' align='top' justify='start'>
									<Col span={24} style={colStyle}>
										<Title level={3}>Open a new bug</Title>
									</Col>
									<Col span={12} style={colStyle}>
										<input type='text' placeholder='Enter title...' id='title' value={title} onChange={this.onChange} />
										{ errors.title ? <Text type='danger'>{errors.title}</Text> : '' }
									</Col>
									<Col span={12} style={colStyle}>
										<input type='text' placeholder='Enter status...' id='status' value={status} onChange={this.onChange} />
										{ errors.status ? <Text type='danger'>{errors.status}</Text> : '' }
									</Col>
									<Col span={24} style={colStyle}>
										<textarea rows='10' placeholder='Enter description....' id='description' value={description} onChange={this.onChange} />
										{ errors.description ? <Text type='danger'>{errors.description}</Text> : '' }
									</Col>
									<Col span={4} style={colStyle}>
										<Button type='primary' block onClick={this.onSubmit}> Open </Button>
									</Col>
									<Col span={4} style={colStyle}>
										<Button type='danger' block onClick={this.resetForm}> Reset </Button>
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

const mapStateToProps = state => ({
	auth: state.auth,
	bugs: state.bugs
});

export default connect(mapStateToProps, { addBug })(Bugs);
