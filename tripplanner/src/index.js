import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';

import locationApp from './reducers';
import { addLocation, editDateTime, editLocationTime, fetchTimeEstimate, selectLocation } from './actions';

const store = createStore(locationApp, applyMiddleware(thunk));

store.dispatch(addLocation("Queens", 40.7282208, -73.79488019999999));
store.dispatch(addLocation("Brooklyn", 40.6781877, -73.9442203));
store.dispatch(addLocation("Times Square", 40.758895, -73.98513100000002));
store.dispatch(addLocation("Queens", 40.7282208, -73.79488019999999));
store.dispatch(editDateTime("2019-01-02T14:01"))
store.dispatch(editLocationTime(0, 20));
store.dispatch(editLocationTime(1, 30));
store.dispatch(editLocationTime(2, 45));
store.dispatch(editLocationTime(3, 20));
store.dispatch(fetchTimeEstimate(store.getState().locations));
store.dispatch(selectLocation(1));
console.log(store.getState());

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)