// import React from 'react';
import { connect } from 'react-redux';
import { addLocationMap } from '../actions';
import AutoComplete from '../components/AutoComplete';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addLocationMap: (name, lat, lng) => {
			dispatch(addLocationMap(name, lat, lng))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);