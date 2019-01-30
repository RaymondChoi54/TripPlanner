import React from 'react';

const Location = ({ onClick, name, longitude, latitude, minutes, timeInfo, start, end }) => {
	if(timeInfo && start) {
		return (
			<li onClick={onClick}>
				{name + " " + latitude + " " + longitude + " " + minutes + " Depart at " + start + " to arrive at " + end}
			</li>
		)
	} else {
		return (
			<li onClick={onClick}>
				{name + " " + latitude + " " + longitude + " " + minutes}
			</li>
		)
	}
}

export default Location;