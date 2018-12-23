import React from 'react';

const Location = ({ onClick, name, longitude, latitude }) => (
	<li onClick={onClick}>
		{name + " " + longitude + " " + latitude}
	</li>
)

export default Location;