import { connect } from 'react-redux';
import { selectLocation } from '../actions'
import GoogleMap from '../components/GoogleMap';
import GoogleMap2 from '../components/GoogleMap2';

const mapStateToProps = state => {
	return {
		state: state.locations
	}
}

const ContainMap = connect(
	mapStateToProps
)(GoogleMap2);

export default ContainMap;