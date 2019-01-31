import React from 'react';
import ContainLocationList from '../containers/ContainLocationList';
import ContainMap from '../containers/ContainMap';
import ContainAutoComplete from '../containers/ContainAutoComplete';
import ContainEditDateTime from '../containers/ContainEditDateTime';
import ContainUpdate from '../containers/ContainUpdate';
import ContainModeSelect from '../containers/ContainModeSelect';

const App = () => (
	<div>
		<ContainAutoComplete/>
		<ContainModeSelect/>
		<ContainUpdate/>
		<ContainEditDateTime/>
		<ContainLocationList/>
		<ContainMap/>
	</div>
);

export default App;