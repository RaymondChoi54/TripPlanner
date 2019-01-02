const locations = (state={locations: [], dateTime: null}, action) => {
	switch(action.type) {
		case 'ADD_LOCATION_MAP':
			return {
				...state,
				locations: [...state.locations, {
					name: action.name,
					latitude: action.latitude,
					longitude: action.longitude,
					minutes: -1
				}]
			};
		case 'DELETE_LOCATION':
			return {
				...state,
				locations: state.locations.filter((location, index) => (index !== action.id))
			};
		case 'EDIT_LOCATION_TIME':
			return {
				...state,
				locations: state.locations.map(
					(location, index) => index === action.id ? {
						...location,
						minutes: action.minutes
					} : location
				)
			}
		case 'EDIT_DATE_TIME':
			return {
				...state,
				dateTime: action.dateTime
			}
		default:
			return state;
	}
}

export default locations;