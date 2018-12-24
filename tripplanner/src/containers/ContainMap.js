import { connect } from 'react-redux';
import GoogleMap from '../components/GoogleMap';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const ContainMap = connect(
	mapStateToProps
)(GoogleMap);

export default ContainMap;