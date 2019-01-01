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

export const fetchPathBegin = () => ({
	type: 'FETCH_PATH_BEGIN'
});

export const fetchPathSuccess = path => ({
	type: 'FETCH_PATH_SUCCESS',
	payload: path
});

export const fetchPathFailure = error => ({
	type: 'FETCH_PATH_FAILURE',
	payload: error
});

export function fetchPath(locations) {
	return function(dispatch) {
		dispatch(fetchPathBegin());

		const google = window.google;
		var directionsService = new google.maps.DirectionsService();

		var wayPoints = [];
		for(var i = 1; i < locations.length - 1; i++) {
			wayPoints.push({
				location: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
				stopover: true
			})
		}

		directionsService.route({
		    origin: new google.maps.LatLng(locations[0].latitude, locations[0].longitude),
		    destination: new google.maps.LatLng(locations[locations.length - 1].latitude, locations[locations.length - 1].longitude),
		    waypoints: wayPoints,
		    travelMode: google.maps.TravelMode.DRIVING
		}, (response, status) => { 
	    	if(status === 'OK') {
		    	dispatch(fetchPathSuccess(response));
		    } else {
		    	dispatch(fetchPathFailure());
		    }
		});
	}
}