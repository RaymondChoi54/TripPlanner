import { connect } from 'react-redux';
import { selectLocation } from '../actions'
import GoogleMap from '../components/GoogleMap';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSelectLocation: (latitude, longitude) => {
			dispatch(selectLocation(latitude, longitude))
		}
	}
}

const ContainMap = connect(
	mapStateToProps,
	mapDispatchToProps
)(GoogleMap);

export default ContainMap;