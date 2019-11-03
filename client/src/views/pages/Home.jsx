import React from 'react';
import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions/authActions.js';


class Home extends React.Component {
	onLogout = e => {
		e.preventDefault();
		this.props.userLogout();
	};

	render() {
		const { user } = this.props.auth;
		return (
			<div> 
				HOME PAGE <br/>
				<h3> Welcome to links {user.name} ! </h3>
				<button onClick={this.onLogout}>Logout</button>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps,{ userLogout })(Home);