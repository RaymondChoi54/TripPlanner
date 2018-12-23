const locations = (state = [], action) => {
	switch(action.type) {
		case 'ADD_LOCATION':
			return [
				...state,
				{
					id: action.id,
					name: action.name,
					longitude: action.longitude,
					latitude: action.latitude
				}
			];
		case 'DELETE_LOCATION':
			return state.filter(location => location.id != action.id);
		default:
			return state;
	}
}

export default locations;