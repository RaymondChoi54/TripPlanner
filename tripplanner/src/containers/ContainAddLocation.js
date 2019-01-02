import React from 'react';
import { connect } from 'react-redux';
import { addLocationMap } from '../actions';

const ContainAddLocation = ({ dispatch }) => {
	let name;
	let latitude;
	let longitude;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if(!name.value.trim()) {
			        	return
			        }
			        dispatch(addLocationMap(name.value, parseFloat(latitude.value), parseFloat(longitude.value)))
				}}
			>
				<input type="text" ref={node => (name = node)} />
				<input type="number" step="any" ref={node => (latitude = node)} />
				<input type="number" step="any" ref={node => (longitude = node)} />
				<button type="submit">Add Location</button>
			</form>
		</div>
	)
}

export default connect()(ContainAddLocation);