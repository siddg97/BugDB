import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';

import { Button, Grid, Header, Icon, Menu, Segment } from 'semantic-ui-react';

class NavBar extends Component {
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
		if (!this.props.auth.isAuthenticated){
			return (
				<Menu borderless stackable inverted icon='labeled'>
					<Menu.Item color='blue' active>
						<Icon name='linkify' />
					</Menu.Item>
				</Menu>
			);
		} else {
			return (
				<Menu pointing borderless stackable inverted icon='labeled'>
					<Menu.Item
						as={ Link }
						to='/home'
						name='home'
						active={activeItem === 'home'}
						color='blue'
						onClick={this.handleMenuClick}
					>
						<Icon name='user circle' />
						{name.split(' ')[0]}
					</Menu.Item>
					<Menu.Item
						as={ Link }
						to='/folders'
						name='folders'
						active={activeItem === 'folders'}
						color='red'
						onClick={this.handleMenuClick}
					>
						<Icon name='folder' />
						Folders
					</Menu.Item>
					<Menu.Item
						as={ Link }
						to='/links'
						name='links'
						active={activeItem === 'links'}
						color='green'
						onClick={this.handleMenuClick}
					>
						<Icon name='linkify' />
						Links
					</Menu.Item>
					<Menu.Item
						as={ Link }
						to='/settings'
						name='settings'
						color='violet'
						active={activeItem === 'settings'}
						onClick={this.handleMenuClick}
					>
						<Icon name='settings' />
						Settings
					</Menu.Item>
					<Menu.Menu position='right'>
						<Menu.Item onClick={this.handleLogout}>
							<Icon name='log out' />
							Log Out
						</Menu.Item>
					</Menu.Menu>
				</Menu>
			);
		}
	}
}

NavBar.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth
});

export default connect(mapStateToProps,{ logoutUser })(NavBar);
