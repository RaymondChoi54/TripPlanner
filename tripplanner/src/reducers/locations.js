const locations = (state={locations: []}, action) => {
	switch(action.type) {
		case 'ADD_LOCATION_MAP':
			return {
				locations: [...state.locations, {
					id: action.id,
					name: action.name,
					latitude: action.latitude,
					longitude: action.longitude,
				}]
			};
		case 'DELETE_LOCATION':
			return {
				locations: state.locations.filter(location => (location.id !== action.id))
			};
		default:
			return state;
	}
}

export default locations;