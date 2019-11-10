import React from 'react';
import { connect } from 'react-redux';
import { getBugs, addBug } from '../../redux/actions/bugActions.js';

class Bugs extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			status: '',
			description: '',
			errors: {}
		}
	}

	componentDidMount() {
		if (!this.props.auth.userLoggedIn){
			this.props.history.push('/login')
		}
		const userData = { id: this.props.auth.user.id };
		this.props.getBugs(userData);
	}

	componentWillReceiveProps(nextProps) {
		if(nextProps.errors) {
			this.setState({
				errors: nextProps.errors
			});
		}
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();
		const { title, status, description } = this.state;
		const newBug = {
			title: title,
			openedBy: this.props.auth.user.id,
			status: status,
			openedOn: Date.now(),
			description: description
		};
		this.props.addBug(newBug, this.props.history);
	}

	render() {
		const { user } = this.props.auth;
		const { bugList } = this.props.bugs;
		const { title, status, description, errors } = this.state;
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
				<form onSubmit={this.onSubmit}>
					<input type='text' placeholder='Enter title...' id='title' value={title} onChange={this.onChange} />
					<br/><input type='text' placeholder='Enter status...' id='status' value={status} onChange={this.onChange} />
					<br/><input type='text' placeholder='Enter description....' id='description' value={description} onChange={this.onChange} />
					<br/><button onClick={this.onSubmit}> Add </button>
				</form>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	auth: state.auth,
	bugs: state.bugs,
	errors: state.errors
});

export default connect(mapStateToProps, { getBugs,addBug })(Bugs);
