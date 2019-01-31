import React from 'react';
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
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;