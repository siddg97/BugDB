import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../redux/actions/authActions.js';


class CoreApp extends React.Component {
	onLogout = e => {
		e.preventDefault();
		this.props.userLogout();
	};

	render() {
		const { user } = this.props.auth;
		const { id, name } = user;
		return (
			<div style={{background:'#fff'}}>
				<h3> Welcome to links {name} ! </h3>
				<h4> UID: {''+id}</h4>
				<button onClick={this.onLogout}>Logout</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps,{ userLogout })(CoreApp);