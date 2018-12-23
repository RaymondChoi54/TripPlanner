const locations = (state={selection: false, latitude: 0, longitude: 0, locations: []}, action) => {
	switch(action.type) {
		case 'ADD_LOCATION_MAP':
			return {
				selection: state.selection,
				latitude: state.latitude,
				longitude: state.longitude,
				locations: [...state.locations, {
					id: action.id,
					name: action.name,
					longitude: state.latitude,
					latitude: state.longitude
				}]
			};
		case 'DELETE_LOCATION':
			return {
				selection: state.selection,
				latitude: state.latitude,
				longitude: state.longitude,
				locations: state.locations.filter(location => (location.id !== action.id))
			};
		case 'SELECT_LOCATION':
			return {
				selection: true,
				latitude: action.latitude,
				longitude: action.longitude,
				locations: state.locations
			}
		default:
			return state;
	}
}

export default locations;