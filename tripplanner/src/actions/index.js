let nextLocationId = 0;
export const addLocationMap = (name) => ({
	type: 'ADD_LOCATION_MAP',
	id: nextLocationId++,
	name
});

export const deleteLocation = id => ({
	type: 'DELETE_LOCATION',
	id
});

export const selectLocation = (longitude, latitude) => ({
	type: 'SELECT_LOCATION',
	longitude,
	latitude
});