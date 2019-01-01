import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';
import { fetchPath } from '../actions';

const mapStateToProps = state => {
	return {
		state: state.locations,
		path: state.path
	}
}

const mapDispatchToProps = dispatch => {
	return {
		fetchPath: locations => {
			dispatch(fetchPath(locations))
		}
	}
}

const ContainMap = connect(
	mapStateToProps,
	mapDispatchToProps
)(GoogleMap);

export default ContainMap;