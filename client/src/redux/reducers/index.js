import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import errorReducer from './errorReducer.js';
import bugReducer from './bugReducer.js';

export default combineReducers({
	auth: authReducer,
	bugs: bugReducer,
	errors: errorReducer
});
