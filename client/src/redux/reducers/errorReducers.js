import { GET_ERRORS } from '../actions/types.js';

const initState = {}

export default function(state= initState, action) {
	switch(action.type) {
		case GET_ERRORS:
			return action.payload;
		default:
			return state;
	}
}
