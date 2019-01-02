import React from 'react';
import Location from '../components/Location';

const LocationList = ({ locations, onLocationDelete, editLocationTime }) => {
	let minutes = [];

	return (
		<ul>
			{locations.map((location, index) => (
				<div key={index}>
					<Location {...location} />
					<button onClick={() => onLocationDelete(location.id)}>
						{"Delete"}
					</button>
					<form 
						onSubmit={e => {
							e.preventDefault()

							if(!minutes[index].value) {
				        		return
				        	}
				        	editLocationTime(location.id, parseInt(minutes[index].value))
				        }}
				    >
						<input type="number" ref={node => (minutes[index] = node)} />
					</form>
				</div>
			))}
		</ul>
	)
}

export default LocationList;