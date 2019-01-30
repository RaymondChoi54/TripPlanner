import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';

import locationApp from './reducers';
import { addLocationMap, editDateTime, editLocationTime, fetchTimeEstimate } from './actions';

const store = createStore(locationApp, applyMiddleware(thunk));

store.dispatch(addLocationMap("Queens", 40.7282208, -73.79488019999999));
store.dispatch(addLocationMap("Brooklyn", 40.6781877, -73.9442203));
store.dispatch(addLocationMap("Times Square", 40.758895, -73.98513100000002));
store.dispatch(addLocationMap("Queens", 40.7282208, -73.79488019999999));
store.dispatch(editDateTime("2019-01-02T14:01"))
store.dispatch(editLocationTime(0, 20));
store.dispatch(editLocationTime(1, 30));
store.dispatch(editLocationTime(2, 45));
store.dispatch(editLocationTime(3, 20));

store.dispatch(fetchTimeEstimate(store.getState().locations))

console.log(store.getState().locations)


render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)