import React from 'react';
import { connect } from 'react-redux';
import { editDateTime } from '../actions';
import StartDateTime from '../components/StartDateTime';

const mapStateToProps = state => {
	return {
		state: state.locations.dateTime
	}
}

const ContainEditDateTime = ({ state, dispatch }) => {
	let dateTime;

	return (
		<div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if(!dateTime.value) {
			        	return
			        }
			        dispatch(editDateTime(dateTime.value));
				}}
			>
				<input type="datetime-local" ref={node => (dateTime = node)} />
				<button type="submit">Save Date & Time</button>
			</form>
			<StartDateTime dateTime={state}/>
		</div>
	)
}

export default connect(mapStateToProps)(ContainEditDateTime);