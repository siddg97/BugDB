import { SET_USER, USER_LOADING } from '../actions/types.js';

const isEmpty = require('is-empty');

const initialState = {
	userLoggedIn: false,
	user: {},
	loading: false
};

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_USER:
			return {
				...state,
				userLoggedIn: !isEmpty(action.payload),
				user: action.payload
			};
		case USER_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}