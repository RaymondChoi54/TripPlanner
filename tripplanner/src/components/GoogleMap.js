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


class GoogleMaps extends Component {
	render() {
		console.log(this.props.state.locations.length)
		if(this.props.state.locations.length >= 2) {
			return (
				<div style={{ height: '500px', width: '500px' }}>
					<MyMapComponent
						isMarkerShown
						loadingElement={<div style={{ height: '100%' }} />}
						containerElement={<div style={{ height: '100%' }} />}
						mapElement={<div style={{ height: '100%' }} />}
						locations={this.props.state.locations}
						directions={this.props.path}
					/>
				</div>
			)
		} else {
			return (
				<div style={{ height: '500px', width: '500px' }}>
					<MyMapComponent
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