import { combineReducers } from 'redux';
import locations from './locations';
import path from './path';

const locationApp = combineReducers({
	locations, path
});

export default locationApp;