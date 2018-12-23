import { connect } from 'react-redux'
import { deleteLocation } from '../actions';
import LocationList from '../components/LocationList'

const mapStateToProps = state => {
	return {
		locations: state.locations.locations
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationDelete: id => {
			dispatch(deleteLocation(id))
		}
	}
}

const ContainLocationList = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationList);

export default ContainLocationList;