import React from 'react';
import ContainAddLocation from '../containers/ContainAddLocation';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';
import ContainAutoComplete from '../containers/ContainAutoComplete';

const App = () => (
	<div>
		<ContainAutoComplete/>
		<ContainAddLocation/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;