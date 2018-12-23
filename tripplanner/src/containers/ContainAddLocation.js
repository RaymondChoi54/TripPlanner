import React from 'react';
import { connect } from 'react-redux'
import { addLocationMap } from '../actions'

const ContainAddLocation = ({ dispatch }) => {
	let name;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!name.value.trim()) {
			        	return
			        }
			        dispatch(addLocationMap(name.value))
				}}
			>
				<input ref={node => (name = node)} />
				<button type="submit">Add Location</button>
			</form>
		</div>
	)
}

export default connect()(ContainAddLocation);