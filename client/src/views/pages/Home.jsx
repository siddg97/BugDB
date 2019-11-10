import React from 'react';
import { connect } from 'react-redux';


class Home extends React.Component {
	render() {
		const { user } = this.props.auth;
		return (
			<div style={{background:'#fff', padding:32}}>
				<h1>HOME PAGE</h1>
				<h2> Welcome <b>{user.name}</b></h2>
				<h3> UID: {'  ' + user.id}</h3>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps)(Home);
