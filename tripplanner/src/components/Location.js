import React from 'react';

const Location = ({ onClick, name, longitude, latitude, minutes, timeInfo, start, end, index }) => {
	if(timeInfo && index > 0) {
		return (
			<li onClick={onClick}>
				{name}
				<br/>
				{"Staying for " + minutes + " min"}
				<br/> 
				{"Depart at " + new Date(start).toLocaleTimeString() + " to arrive at " + new Date(end).toLocaleTimeString()}
			</li>
		)
	} else {
		return (
			<li onClick={onClick}>
				{name}
			</li>
		)
	}
}

export default Location;