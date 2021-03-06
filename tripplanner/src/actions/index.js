import fetch from 'cross-fetch'

/// Location ///

// Mode
export const selectMode = (mode) => ({
	type: 'SELECT_MODE',
	mode
});

// Start Date & Time
export const editDateTime = (dateTime) => ({
	type: 'EDIT_DATE_TIME',
	dateTime
});

// Location Info
export const addLocation = (name, latitude, longitude) => ({
	type: 'ADD_LOCATION',
	name,
	latitude,
	longitude
});

export const selectLocation = (id) => ({
	type: 'SELECT_LOCATION',
	id
})

export const editLocation = (name, latitude, longitude, id) => ({
	type: 'EDIT_LOCATION',
	name,
	latitude,
	longitude,
	id
})

export const addEditLocation = (name, latitude, longitude) => {
	return function(dispatch, getState) {
		var selected = getState().locations.selected;
		if(selected === -1) {
			return dispatch(addLocation(name, latitude, longitude));
		} else {
			return dispatch(editLocation(name, latitude, longitude, selected));
		}
	}
};

export const deleteLocation = id => ({
	type: 'DELETE_LOCATION',
	id
});

export const editLocationTime = (id, minutes) => ({
	type: 'EDIT_LOCATION_TIME',
	id,
	minutes
});

// Time Estimate Info

export const fetchTimeSuccess = timeInfo => ({
	type: 'FETCH_TIME_SUCCESS',
	payload: timeInfo
});

export const fetchTimeFailure = error => ({
	type: 'FETCH_TIME_FAILURE',
	payload: error
});

export function fetchTimeEstimate() {
	return function(dispatch, getState) {
		var locations = getState().locations;

		if(locations.length < 2) {
			return dispatch(fetchTimeFailure());
		} else {
			return fetch('http://localhost:5000/timeEstimate', {
				method: 'post',
				headers: { 'Content-Type':'application/json' },
				body: JSON.stringify(locations)
			})
			.then((res) => res.json())
			.then((data) => {
				dispatch(fetchTimeSuccess(data.travelTime))
			})
			.catch((err) => console.log("Error: " + err))
		}
	}
}

/// Path ///

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

export function fetchPath() {
	return function(dispatch, getState) {
		var locations = getState().locations.locations;

		if(locations.length < 2) {
			return dispatch(fetchPathFailure());
		} else {
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
			    	return dispatch(fetchPathSuccess(response));
			    } else {
			    	return dispatch(fetchPathFailure());
			    }
			});
		}
	}
}