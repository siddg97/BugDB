import axios from 'axios';
import {
	BUG_LOADING,
	SET_BUGS,
	GET_ERRORS,
	SET_BUG
} from './types.js';

// add a bug
export const addBug = bugData => dispatch => {
	axios
		.post('/api/bugs/', bugData)
		.then(res => dispatch(setBug(res.data)))
		.catch(err => {
			dispatch(getErrors(err));
		});
}

// Action creator
export const setBug = bug => {
	return {
		type: SET_BUG,
		payload: bug
	};
}



// get all bugs
export const getBugs = () => dispatch => {
	dispatch(bugsLoading())
	axios
		.get('/api/bugs/')
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
export const bugsLoading = () => {
	return {
		type: BUG_LOADING
	};
}

// Action creator
export const getErrors = err => {
	return {
		type: GET_ERRORS,
		payload: err.response.data
	};
}
