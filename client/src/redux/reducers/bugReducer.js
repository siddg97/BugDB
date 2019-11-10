import { SET_BUGS, BUG_LOADING } from '../actions/types.js';

const initialState = {
	bugList: [],
	loading: false
};

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_BUGS:
			return {
				...state,
				bugList: action.payload
			};
		case BUG_LOADING:
			return {
				...state,
				loading: true
			};
		default:
			return state;
	}
}
