import { SET_BUGS, BUG_LOADING, SET_BUG, DELETE_BUG, UPDATE_BUG } from '../actions/types.js';

const initialState = {
	bugList: [],
	loading: false
};

export default function(state = initialState, action) {
	switch(action.type) {
		case SET_BUGS:
			return {
				...state,
				bugList: action.payload,
				loading: false
			};

		case BUG_LOADING:
			return {
				...state,
				loading: true
			};

		case SET_BUG:
			return {
				...state,
				bugList: [...state.bugList, action.payload],
				loading: false
			};

		case UPDATE_BUG:
			let index = state.bugList.findIndex(bug => bug._id === action.payload._id)
			state.bugList.splice(index,1, action.payload)
			return {
				...state,
				bugList: [...state.bugList]
			};

		case DELETE_BUG:
			return {
				...state,
				bugList: state.bugList.filter(bug => bug._id !== action.payload),
				loading: false
			};

		default:
			return state;
	}
}
