import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App'

import locationApp from './reducers';
import { addLocationMap } from './actions'

const store = createStore(locationApp, applyMiddleware(thunk))

store.dispatch(addLocationMap("Queens", 40.7282208, -73.79488019999999))
store.dispatch(addLocationMap("Brooklyn", 40.6781877, -73.9442203))

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)