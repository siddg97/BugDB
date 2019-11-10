import axios from 'axios';
import {
	BUG_LOADING,
	SET_BUGS,
	GET_ERRORS,
	CREATE_BUG
} from './types.js';

// add a bug
export const addBug = bugData => dispatch => {
	axios
		.post('/api/bugs/', bugData)
		.then(res => dispatch(createBug(res.data)))
		.catch(err => {
			dispatch(getErrors(err));
		});
}

// get all bugs
export const getBugs = userData => dispatch => {
	const uri = '/api/bugs/'+userData.id;
	axios
		.get(uri)
		.then(res => dispatch(setBugs(res.data)))
		.catch(err => dispatch(getErrors(err)));
}

// Action creator
export const setBugs = bugs => {
	return {
		type: SET_BUGS,
		payload: bugs
	};
}

// Action creator
export const createBug = bug => {
	return {
		type: CREATE_BUG,
		payload: bug
	};
}

// Action creator
export const bugsLoading = () => {
	return {
		type: BUG_LOADING
	};
}

// Action creator
export const getErrors = err => {
	return {
		type: GET_ERRORS,
		payload: err
	};
}
