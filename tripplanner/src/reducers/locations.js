const locations = (state={locations: [], dateTime: null, timeInfo: false, selected: -1, mode: "driving"}, action) => {
	switch(action.type) {
		case 'SELECT_MODE':
			return {
				...state,
				mode: action.mode
			};

		case 'ADD_LOCATION':
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

		case 'SELECT_LOCATION':
			return {
				...state,
				selected: (state.selected === action.id) ? -1 : action.id
			};

		case 'EDIT_LOCATION':
			return {
				...state,
				locations: state.locations.map((location, index) => (index === action.id) ? {
					name: action.name,
					latitude: action.latitude,
					longitude: action.longitude,
					minutes: location.minutes
				} : location),
				timeInfo: false,
				selected: -1
			};

		case 'DELETE_LOCATION':
			return {
				...state,
				locations: state.locations.filter((location, index) => (index !== action.id)),
				timeInfo: false,
				selected: -1
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