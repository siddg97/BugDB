import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {
	render() {
		const { user } = this.props.auth;
		const { uid, name } = user;
		return (
			<div> 
				HOME PAGE
			</div>
		);
	}
}

export default Home;