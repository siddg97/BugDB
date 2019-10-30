import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Drawer, Icon, Menu } from 'antd';

const menu = [
	{
		path:'/',
		title:'Home',
		icon:'home'
	},
	{
		path:'/dir',
		title:'Folders',
		icon:'folder'
	},
	{
		path:'/user',
		title:'User',
		icon:'user'
	}
]

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

	render(){
		const mItemStyle = {height:'140px',padding:24,textAlign:'center',margin:0};
		const iconStyle = {"fontSize":"50px",marginRight:0};
		return(
			<div>
				<Button type='danger' onClick={this.openMenu} icon='menu'/>
				<Drawer
					closable={false}
					placement='left'
					visible={this.state.visible}
					onClose={this.closeMenu}
					width={144}
				>
					<Menu theme='dark' mode='inline' style={{minHeight:'100vh'}} selectedKeys={this.state.selected}>
					{
						menu.map((item) => 
							<Menu.Item key={item.path} style={mItemStyle} onClick={this.handleMenuClick}>
								<Link to={item.path}>
									<Icon type={item.icon} style={iconStyle}/><br/>
									<span className='nav-item'>{item.title}</span>
								</Link>
							</Menu.Item>
						)
					}
					</Menu>
				</Drawer>
			</div>
		);
	}
}

export default Nav