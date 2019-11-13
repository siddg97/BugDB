import React from 'react';

import { Button, Drawer, Typography } from 'antd';

const { Title } = Typography;

class ExpandBug extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			drawer: false
		};
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

	render(props) {
		const { bug } = this.props;
		return (
			<div>
				<center><Button type='link' onClick={this.openBug}>Expand</Button></center>
				<Drawer
					visible={this.state.drawer}
					onClose={this.closeBug}
					width={'100vw'}
				>
					<Title>{bug.title}</Title>
				</Drawer>
			</div>
		)
	}
}

export default ExpandBug;