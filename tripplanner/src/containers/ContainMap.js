import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import { deleteLocation } from '../actions';

const mapStateToProps = state => {
	return {
		state: state.locations,
		path: state.path.path
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationDelete: id => {
			dispatch(deleteLocation(id))
		}
	}
}

const ContainMap = connect(
	mapStateToProps,
	mapDispatchToProps
)(GoogleMap);

export default ContainMap;