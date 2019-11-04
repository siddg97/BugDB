import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Icon, Menu } from 'antd';

import { connect } from 'react-redux';
import { userLogout } from '../../redux/actions/authActions.js';


class Nav extends Component {
	constructor(){
		super();
		let path = window.location.pathname;
		this.state = {
			visible: false,
			selected:[path]
		};
	}

	openMenu = () => {
		this.setState({visible: true});
	}

	closeMenu = () => {
		this.setState({visible: false});
	}

	handleMenuClick = e => {
		this.setState({
			selected:[e.key],
			visible:false
		});
	}

	onLogout = e => {
		e.preventDefault();
		this.props.userLogout();
	}

	render(){
		const mItemStyle = {height:'140px',padding:24,textAlign:'center',margin:0};
		const iconStyle = {"fontSize":"50px",marginRight:0};
		const { user, userLoggedIn } = this.props.auth;
		return(
			<div>
				<Button type='danger' onClick={this.openMenu} icon='menu'/>
				{userLoggedIn ?
					<Drawer
						closable={false}
						placement='left'
						visible={this.state.visible}
						onClose={this.closeMenu}
						width={150}
					>
						<Menu 
							theme='dark' 
							mode='inline' 
							style={{minHeight:'100vh'}} 
							selectedKeys={this.state.selected}
						>
							<Menu.Item key='/home' style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to='/home'>
									<Icon type='home' style={iconStyle}/><br/>
									<span className='nav-item'>Home</span>
								</Link>
							</Menu.Item>
							<Menu.Item key='/bugs' style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to='/bugs'>
									<Icon type='bug' style={iconStyle}/><br/>
									<span className='nav-item'>Bugs</span>
								</Link>
							</Menu.Item>
							<Menu.Item key='/user' style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to='/user'>
									<Icon type='user' style={iconStyle}/><br/>
									<span className='nav-item'>{user.name}</span>
								</Link>
							</Menu.Item>
							<Menu.Item key='/logout' style={mItemStyle} onClick={this.handleMenuClick}>
									<Button type='danger' block onClick={this.onLogout}> Logout </Button>
							</Menu.Item>
						</Menu>
					</Drawer>
					:
					<Drawer
						closable={false}
						placement='left'
						visible={this.state.visible}
						onClose={this.closeMenu}
						width={150}
					>
						<Menu 
							theme='dark' 
							mode='inline' 
							style={{minHeight:'100vh'}} 
							selectedKeys={this.state.selected}
						>
							<Menu.Item key='/login' style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to='/login'>
									<Icon type='login' style={iconStyle}/><br/>
									<span className='nav-item'>Log In</span>
								</Link>
							</Menu.Item>
							<Menu.Item key='/register' style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to='/register'>
									<Icon type='user-add' style={iconStyle}/><br/>
									<span className='nav-item'>Sign Up</span>
								</Link>
							</Menu.Item>
						</Menu>
					</Drawer>
				}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth:state.auth
});

export default connect(mapStateToProps, { userLogout })(Nav);