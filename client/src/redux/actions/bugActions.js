import axios from 'axios';
import {
	BUG_LOADING,
	SET_BUGS,
	SET_BUG,
	DELETE_BUG,
	UPDATE_BUG
} from './types.js';


// add a bug
export const addBug = bugData => dispatch => {
	axios
		.post('/api/bugs/', bugData)
		.then(res => dispatch(setBug(res.data)))
		.catch(err => console.log(err))
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
		.catch(err => console.log(err));
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
		.catch(err => console.log(err));
}

// Action creator
export const removeBug = id => {
	return {
		type: DELETE_BUG,
		payload: id
	};
}



// Update bug
export const updateBug = bugData => dispatch => {
	axios
		.post('/api/bugs/update', bugData)
		.then(res => dispatch({ type: UPDATE_BUG, payload: res.data }))
		.catch(err => console.log(err))
}


// Action creator
export const bugsLoading = () => {
	return {
		type: BUG_LOADING
	};
}
