import React from 'react';

const Location = ({ onClick, name, longitude, latitude }) => (
	<li onClick={onClick}>
		{name + " " + latitude + " " + longitude}
	</li>
)

export default Location;