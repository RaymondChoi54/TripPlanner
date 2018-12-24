import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import locationApp from './reducers';
import App from './components/App'

import { addLocationMap } from './actions'

const store = createStore(locationApp)

store.dispatch(addLocationMap("ime", 40.7282208, -73.79488019999999))
store.dispatch(addLocationMap("ime", 40.6781877, -73.9442203))

render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('root')
)