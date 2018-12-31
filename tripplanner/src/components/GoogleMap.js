import React, { Component } from 'react';
import { withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';

const MyMapComponent = withGoogleMap(props =>
  	<GoogleMap
    	defaultZoom={12.5}
    	defaultCenter={{ lat: 40.74215837520133, lng: -73.98990542164569 }}
  	>
	  	<Polyline 
			path={props.path}
			options={{ 
				strokeColor: '#ff2527',
				strokeOpacity: 0.75,
				strokeWeight: 3,
				icons: [{ 
					icon: "hello",
					offset: '0',
					repeat: '10px'
				}],
			}}
		/>
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

	constructor(props) {
		super(props);
		this.state = {
			path: [   
				{"lat": 40.7282208, "lng": -73.79488019999999},
				{"lat": 40.6781877, "lng": -73.9442203}
			]
		};
	}

	render() {
  		return (
			<div style={{ height: '500px', width: '500px' }}>
				<MyMapComponent
					isMarkerShown
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
					locations={this.props.state.locations}
					path={this.state.path}
				/>
			</div>
		)
	}
}


export default GoogleMaps;