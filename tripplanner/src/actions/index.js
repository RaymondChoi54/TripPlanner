let nextLocationId = 0;
export const addLocationMap = (name, latitude, longitude) => ({
	type: 'ADD_LOCATION_MAP',
	id: nextLocationId++,
	name,
	latitude,
	longitude
});

export const deleteLocation = id => ({
	type: 'DELETE_LOCATION',
	id
});
