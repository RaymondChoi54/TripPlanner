import React from 'react';
import ContainAddLocation from '../containers/ContainAddLocation';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';
import ContainAutoComplete from '../containers/ContainAutoComplete';
import ContainEditDateTime from '../containers/ContainEditDateTime';
import ContainUpdate from '../containers/ContainUpdate';

const App = () => (
	<div>
		<ContainAutoComplete/>
		<ContainUpdate/>
		<ContainEditDateTime/>
		<ContainAddLocation/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;