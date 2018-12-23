let nextLocationId = 0;
export const addLocation = (name, longitude, latitude) => ({
	type: 'ADD_LOCATION',
	id: nextLocationId++,
	name,
	longitude,
	latitude
});

export const deleteLocation = id => ({
	type: 'DELETE_LOCATION',
	id
});