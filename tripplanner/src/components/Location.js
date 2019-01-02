import React from 'react';

const Location = ({ onClick, name, longitude, latitude, minutes }) => (
	<li onClick={onClick}>
		{name + " " + latitude + " " + longitude + " " + minutes}
	</li>
)

export default Location;