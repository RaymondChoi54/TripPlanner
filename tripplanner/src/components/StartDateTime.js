import React from 'react';

const StartDateTime = (props) => {
	if(props.dateTime) {
		return (
			<div>
				{props.dateTime}
			</div>
		)
	} else {
		return (
			<div/>
		)
	}
};

export default StartDateTime;