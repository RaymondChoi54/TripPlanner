import React from 'react';
import Location from '../components/Location';

const LocationList = ({ locations, onLocationDelete }) => (
	<ul>
		{locations.map((location, index) => (
			<Location key={index} {...location} onClick={() => onLocationDelete(location.id)} />
		))}
	</ul>
)

export default LocationList;