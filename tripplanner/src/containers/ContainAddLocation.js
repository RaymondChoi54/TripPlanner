import React from 'react';
import { connect } from 'react-redux'
import { addLocationMap } from '../actions'

const ContainAddLocation = ({ dispatch }) => {
	let name;
	let latitude;
	let longitude;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!name.value.trim()) {
			        	return
			        }
			        dispatch(addLocationMap(name.value, latitude, longitude))
				}}
			>
				<input ref={node => (name = node)} />
				<input ref={node => (latitude = node)} />
				<input ref={node => (longitude  = node)} />
				<button type="submit">Add Location</button>
			</form>
		</div>
	)
}

export default connect()(ContainAddLocation);