import React from 'react';
import { connect } from 'react-redux';
import { getBugs, addBug, deleteBug } from '../../redux/actions/bugActions.js';

class Bugs extends React.Component {
	constructor() {
		super();
		this.state = {
			title: '',
			status: '',
			description: ''
		}
	}

	componentDidMount() {
		const userData = { id: this.props.auth.user.id };
		this.props.getBugs(userData);
	}

	onChange = e => {
		this.setState({ [e.target.id]: e.target.value });
	}

	onSubmit = e => {
		e.preventDefault();
		const { title, status, description } = this.state;
		const newBug = {
			title: title,
			status: status,
			description: description
		};
		this.props.addBug(newBug);
	}

	onDelete = id => {
		this.props.deleteBug(id);
	}

	render() {
		const { user } = this.props.auth;
		const { bugList } = this.props.bugs;
		const { title, status, description } = this.state;
		const { errors } = this.props;
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
							<button onClick={this.onDelete.bind(this, bug._id)}> delete </button>
						</li>
					)
				}
				</ul>
				<form onSubmit={this.onSubmit}>
					<input type='text' placeholder='Enter title...' id='title' value={title} onChange={this.onChange} />
					{ errors.title ? <span>Error: {errors.title}<br/></span> : '' }
					<br/><input type='text' placeholder='Enter status...' id='status' value={status} onChange={this.onChange} />
					{ errors.status ? <span>Error: {errors.status}<br/></span> : '' }
					<br/><input type='text' placeholder='Enter description....' id='description' value={description} onChange={this.onChange} />
					{ errors.description ? <span>Error: {errors.description}<br/></span> : '' }
					<br/><button type='submit' onClick={this.onSubmit}> Add </button>
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

export default connect(mapStateToProps, { getBugs, addBug, deleteBug })(Bugs);
