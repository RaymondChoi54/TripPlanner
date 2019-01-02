import { connect } from 'react-redux'
import { deleteLocation, editLocationTime } from '../actions';
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
		},
		editLocationTime: (id, minutes) => {
			dispatch(editLocationTime(id, minutes))
		}
	}
}

const ContainLocationList = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationList);

export default ContainLocationList;