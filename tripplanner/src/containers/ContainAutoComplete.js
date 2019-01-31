// import React from 'react';
import { connect } from 'react-redux';
import { addEditLocation } from '../actions';
import AutoComplete from '../components/AutoComplete';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addEditLocation: (name, lat, lng) => {
			dispatch(addEditLocation(name, lat, lng))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AutoComplete);