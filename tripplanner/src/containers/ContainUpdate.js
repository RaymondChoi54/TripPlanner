import React from 'react';
import { connect } from 'react-redux';
import { fetchTimeEstimate } from '../actions';

const ContainUpdate = ({ dispatch }) => {

	return (
		<button onClick={() => dispatch(fetchTimeEstimate())}>Update</button>
	)
}

export default connect()(ContainUpdate);