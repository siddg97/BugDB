import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

import { Button } from 'semantic-ui-react';

class Dashboard extends Component {
	handleLogout = e => {
		e.preventDefault();
		this.props.logoutUser();
	};

	render() {
		const { user } = this.props.auth;
		return (
			<div>
				Welcome to Links {user.name.split(' ')[0]}!
				<br/>
				<Button color='red' onClick={this.handleLogout} size='large'>
					Logout
				</Button>
			</div>
		)
	}
}

Dashboard.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(Dashboard);
