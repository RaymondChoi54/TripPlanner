import { connect } from 'react-redux'
import { deleteLocation, editLocationTime, selectLocation } from '../actions';
import LocationList from '../components/LocationList'

const mapStateToProps = state => {
	return {
		locations: state.locations.locations,
		timeInfo: state.locations.timeInfo,
		selected: state.locations.selected
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onLocationDelete: id => {
			dispatch(deleteLocation(id))
		},
		editLocationTime: (id, minutes) => {
			dispatch(editLocationTime(id, minutes))
		},
		selectLocation: (id) => {
			dispatch(selectLocation(id))
		}
	}
}

const ContainLocationList = connect(
	mapStateToProps,
	mapDispatchToProps
)(LocationList);

export default ContainLocationList;