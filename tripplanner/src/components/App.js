import React from 'react';
import ContainAddLocation from '../containers/ContainAddLocation';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';

const App = () => (
	<div>
		<ContainAddLocation/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;