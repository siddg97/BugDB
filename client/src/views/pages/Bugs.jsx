import React from 'react';
import { connect } from 'react-redux';
import { getBugs } from '../../redux/actions/bugActions.js';

class Bugs extends React.Component {

	componentDidMount() {
		if (!this.props.auth.userLoggedIn){
			this.props.history.push('/login')
		}
		const userData = { id: this.props.auth.user.id };
		this.props.getBugs(userData);
	}

	render() {
		const { user } = this.props.auth;
		const { bugList } = this.props.bugs;
		return (
			<div style={{background:'#fff', padding:32}}>
				<h1>BUGS PAGE</h1>
				<h2> Bugs Opened by <b>{user.name}</b> : </h2>
				<ul>
				{
					bugList.map((bug, i) =>
						<li key={i}>
							<h3>Title: {bug.title}</h3>
							<h4>Decription: {bug.description}</h4>
						</li>
					)
				}

				</ul>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	bugs: state.bugs,
	errors: state.errors
});

export default connect(mapStateToProps, { getBugs })(Bugs);
