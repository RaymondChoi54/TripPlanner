import React from 'react';

const Location = ({ onClick, name, longitude, latitude, minutes, timeInfo, start, end, index }) => {
	let staying = null;
	let info = null;

	if(minutes > 0 && index > 0) {
		staying = <div>{"Staying for " + minutes + " min"}</div>
	}

	if(timeInfo && index > 0) {
		info = <div>{"Depart at " + new Date(start).toLocaleTimeString() + " to arrive at " + new Date(end).toLocaleTimeString()}</div>
	}

	return (
		<li onClick={onClick}>
			{name}
			{staying}
			{info}
		</li>
	)
}

export default Location;