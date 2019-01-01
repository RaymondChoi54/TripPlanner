// import React from 'react';
import { connect } from 'react-redux'
import { addLocationMap } from '../actions'
import AutoComplete from '../components/AutoComplete';
import { fetchPath } from '../actions';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addLocationMap: (name, lat, lng) => {
			dispatch(addLocationMap(name, lat, lng))
		},
		updatePath: locations => {
			dispatch(fetchPath(locations))
		}
	}
}

// const ContainAutoComplete = ({ state, dispatch }) => {
// 	console.log(state)
// 	return (
// 		<AutoComplete 
// 			onSubmit={
// 				(name, lat, lng) => dispatch(addLocationMap(name, lat, lng))
// 			}
// 			updater={
// 				(locations) => dispatch(fetchPath(locations))
// 			}
// 			locations={state.locations}
// 		/>
// 	)
// }

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);