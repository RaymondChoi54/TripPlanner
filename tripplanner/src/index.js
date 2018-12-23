import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { addLocation, deleteLocation } from './actions';
import locationApp from './reducers';

const store = createStore(locationApp)
console.log(store.getState())

store.dispatch(addLocation('Times Square1', 10010100, 32424345));
store.dispatch(addLocation('Times Square2', 10010100, 32424345));
store.dispatch(addLocation('Times Square3', 10010100, 32424345));
store.dispatch(addLocation('Times Square4', 10010100, 32424345));
store.dispatch(deleteLocation(1));

console.log(store.getState())