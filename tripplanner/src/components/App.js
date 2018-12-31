import React from 'react';
import ContainAddLocation from '../containers/ContainAddLocation';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';
import AutoComplete from '../components/AutoComplete';

const App = () => (
	<div>
		<AutoComplete/>
		<ContainAddLocation/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;