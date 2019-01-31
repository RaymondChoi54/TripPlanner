import React from 'react';
import Location from '../components/Location';
import EditLocation from '../components/EditLocation';

const LocationList = ({ locations, timeInfo, selected, onLocationDelete, editLocationTime, selectLocation }) => {
	return (
		<ul>
			{locations.map((location, index) => (
				<div key={index}>
					<Location {...location} timeInfo={timeInfo} index={index} onClick={() => {selectLocation(index)}}/>
					<EditLocation selected={selected} index={index} onLocationDelete={onLocationDelete} editLocationTime={editLocationTime}/>
				</div>
			))}
		</ul>
	)
}

export default LocationList;