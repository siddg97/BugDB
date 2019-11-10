import axios from 'axios';
import {
	BUG_LOADING,
	SET_BUGS,
	SET_BUG,
	DELETE_BUG,
	GET_ERRORS
} from './types.js';


// add a bug
export const addBug = bugData => dispatch => {
	dispatch(bugsLoading());
	axios
		.post('/api/bugs/', bugData)
		.then(res => dispatch(setBug(res.data)))
		.catch(err => {
				dispatch(getErrors(err))
		})
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
	dispatch(bugsLoading());
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



// Delete bug
export const deleteBug = id => dispatch => {
	axios
		.delete('/api/bugs/delete/'+id)
		.then(res => dispatch(removeBug(id)))
		.catch(err => dispatch(getErrors(err)));
}

// Action creator
export const removeBug = id => {
	return {
		type: DELETE_BUG,
		payload: id
	};
}



// Action creator
export const bugsLoading = () => {
	return {
		type: BUG_LOADING
	};
}

// Action creator
const getErrors = err => {
	return {
		type:GET_ERRORS,
		payload: err.response.data ? err.response.data : ''
	}
}
