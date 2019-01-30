const locations = (state={locations: [], dateTime: null, timeInfo: false}, action) => {
	switch(action.type) {
		case 'ADD_LOCATION_MAP':
			return {
				...state,
				locations: [...state.locations, {
					name: action.name,
					latitude: action.latitude,
					longitude: action.longitude,
					minutes: -1
				}],
				timeInfo: false
			};

		case 'DELETE_LOCATION':
			return {
				...state,
				locations: state.locations.filter((location, index) => (index !== action.id)),
				timeInfo: false
			};

		case 'EDIT_LOCATION_TIME':
			return {
				...state,
				locations: state.locations.map(
					(location, index) => index === action.id ? {
						...location,
						minutes: action.minutes
					} : location
				),
				timeInfo: false
			};

		case 'EDIT_DATE_TIME':
			return {
				...state,
				dateTime: action.dateTime,
				timeInfo: false
			};

		case 'FETCH_TIME_SUCCESS':
			return {
				...state,
				locations: state.locations.map((location, index) => index > 0 ? {
					...location,
					start: action.payload[index - 1].start,
					end: action.payload[index - 1].end
				} : location),
				timeInfo: true
			};

		case 'FETCH_TIME_FAILURE':
			return {
				...state,
				timeInfo: false
			};

		default:
			return state;
	}
}

export default locations;