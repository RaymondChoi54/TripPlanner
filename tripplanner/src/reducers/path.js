const initialState = {
	path: null,
	loading: false,
	error: null
};

const path = function(state=initialState, action) {
	switch(action.type) {
		case 'FETCH_PATH_BEGIN':
			return {
				...state,
				loading: true,
				error: null
			};

		case 'FETCH_PATH_SUCCESS':
			return {
				...state,
				loading: false,
				path: action.payload
			};

		case 'FETCH_PATH_FAILURE':
			return {
				...state,
				loading: false,
				error: action.payload,
				path: null
			};

		default:
			return state;
	}
}

export default path;