import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../redux/actions/authActions';

import { Button, Grid, Header, Icon, Menu, Segment } from 'semantic-ui-react';

class Home extends Component {
	constructor(){
		super();
		this.state = {
			activeItem:'home'
		};
	}

	handleLogout = e => {
		e.preventDefault();
		this.props.logoutUser();
	};
	handleMenuClick = (e, { name }) => {
		this.setState( {activeItem: name} );
	}

	render() {
		const { name } = this.props.auth.user;
		const { activeItem } = this.state;
		return (
			<Grid.Column width={8}>
					<Header inverted color='blue' icon>
						<Icon name='hand spock' />
						{name}
					</Header>
			</Grid.Column>
		);
	}
	
}

Home.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(Home);
