const locations = (state={locations: []}, action) => {
	switch(action.type) {
		case 'ADD_LOCATION_MAP':
			return {
				locations: [...state.locations, {
					id: action.id,
					name: action.name,
					latitude: action.latitude,
					longitude: action.longitude,
					minutes: -1
				}]
			};
		case 'DELETE_LOCATION':
			return {
				locations: state.locations.filter(location => (location.id !== action.id))
			};
		case 'EDIT_LOCATION_TIME':
			return {
				locations: state.locations.map(
					location => location.id === action.id ? {
						...location,
						minutes: action.minutes
					} : location
				)
			}
		default:
			return state;
	}
}

export default locations;