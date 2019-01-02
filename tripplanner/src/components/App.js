import React from 'react';
import ContainAddLocation from '../containers/ContainAddLocation';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';
import ContainAutoComplete from '../containers/ContainAutoComplete';
import ContainEditDateTime from '../containers/ContainEditDateTime';

const App = () => (
	<div>
		<ContainAutoComplete/>
		<ContainEditDateTime/>
		<ContainAddLocation/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;