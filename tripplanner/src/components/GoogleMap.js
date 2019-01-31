import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from 'react-google-maps';

const MyMapComponent = withGoogleMap(props =>
  	<GoogleMap
    	defaultZoom={12.5}
    	defaultCenter={{ lat: 40.74215837520133, lng: -73.98990542164569 }}
  	>
		{props.locations.map((location, index) => (
	      	<Marker
	      		key={index}
	      		label={location.name}
	        	position={{lat:location.latitude, lng:location.longitude}}
	    	/>
	    ))}
	    <DirectionsRenderer directions={props.directions} />
	</GoogleMap>
)

const MyMapComponentNoD = withGoogleMap(props =>
  	<GoogleMap
    	defaultZoom={12.5}
    	defaultCenter={{ lat: 40.74215837520133, lng: -73.98990542164569 }}
  	>
		{props.locations.map((location, index) => (
	      	<Marker
	      		key={index}
	      		label={location.name}
	        	position={{lat:location.latitude, lng:location.longitude}}
	    	/>
	    ))}
	</GoogleMap>
)

class GoogleMaps extends Component {

	pathNeedsChange(curr, prev) {
		if(curr.locations.length !== prev.locations.length) {
			return true;
		}

		for(var i = 0; i < curr.locations.length; i++) {
			if(curr.locations[i].latitude !== prev.locations[i].latitude || curr.locations[i].latitude !== prev.locations[i].latitude) {
				return true;
			}
		}
		return false;
	}

	componentWillMount() {
		this.props.fetchPath();
	}

	componentDidUpdate(prevProps) {
	    if(this.pathNeedsChange(this.props.state, prevProps.state)) {
		   	this.props.fetchPath();
	    }
	}

	render() {
		if(this.props.path.path != null) {
			return (
				<div style={{ height: '500px', width: '500px' }}>
					<MyMapComponent
						isMarkerShown
						loadingElement={<div style={{ height: '100%' }} />}
						containerElement={<div style={{ height: '100%' }} />}
						mapElement={<div style={{ height: '100%' }} />}
						locations={this.props.state.locations}
						directions={this.props.path.path}
					/>
				</div>
			)
		} else {
			return (
				<div style={{ height: '500px', width: '500px' }}>
					<MyMapComponentNoD
						isMarkerShown
						loadingElement={<div style={{ height: '100%' }} />}
						containerElement={<div style={{ height: '100%' }} />}
						mapElement={<div style={{ height: '100%' }} />}
						locations={this.props.state.locations}
					/>
				</div>
			)
		}
	}
}

export default GoogleMaps;