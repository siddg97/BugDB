import axios from 'axios';
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utils/setAuthToken.js';

import {
	GET_ERRORS,
	SET_USER,
	USER_LOADING
} from './types.js';

// Register user
export const registerUser = (userData,history) => dispatch => {
	axios
		.post('http://localhost:5000/api/user/register',userData)
		.then(res => history.push('/login'))
		.catch(err => {
			dispatch(getErrors(err));
		});
}

// Login user
export const loginUser = userData => dispatch => {
	axios
		.post('http://localhost:5000/api/user/login',userData)
		.then(res => {
			const { token } = res.data;
			localStorage.setItem('jwtToken', token);
			setAuthToken(token);
			const decoded = jwt_decode(token);
			dispatch(setUser(decoded));
		})
		.catch(err => {
			dispatch(getErrors(err));
		});
}

// Action creator: 
export const setUser = decoded => {
	return {
		type: SET_USER,
		payload: decoded
	};
};

// Action creator: 
export const userLoading = () => {
	return {
		type: USER_LOADING
	};
};

// Action creator
export const userLogout = () => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setUser({}));
};

// Action creator
export const getErrors = err => {
	return {
		type: GET_ERRORS,
		payload: err.response.data
	}
};