import React from 'react';
import { connect } from 'react-redux';
import { selectMode } from '../actions';

const ContainModeSelect = ({ dispatch }) => {
	let mode;

	return (
		<div>
			<form
				onChange={e => {
					e.preventDefault();
					console.log(mode.value);
					dispatch(selectMode(mode.value));
				}}
			>
				<select type="text" ref={node => (mode = node)}>
					<option value="driving">{"driving"}</option>
					<option value="walking">{"walking"}</option>
					<option value="bicycling">{"bicycling"}</option>
					<option value="transit">{"transit"}</option>
				</select>

			</form>
		</div>
	)
}

export default connect()(ContainModeSelect);