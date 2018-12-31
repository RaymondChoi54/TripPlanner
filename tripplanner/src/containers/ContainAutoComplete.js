import React from 'react';
import { connect } from 'react-redux'
import { addLocationMap } from '../actions'
import AutoComplete from '../components/AutoComplete';

const ContainAutoComplete = ({ dispatch }) => {
	return (
		<AutoComplete onSubmit={
			(name, lat, lng) => dispatch(addLocationMap(name, lat, lng))
		}/>
	)
}

export default connect()(ContainAutoComplete);