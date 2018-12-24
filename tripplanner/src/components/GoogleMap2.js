import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Polyline } from 'react-google-maps';
import config from '../config'


const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  	<GoogleMap
    	defaultZoom={12.5}
    	defaultCenter={{ lat: 40.74215837520133, lng: -73.98990542164569 }}
  	>
	  	<Polyline 
			path={[   
				{"lat": 40.7282208, "lng": -73.79488019999999},
				{"lat": 40.6781877, "lng": -73.9442203}
			]}
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
		{console.log(props.locations)}
		{props.locations.map((location, index) => (
	      	<Marker
	      		key={index}
	        	position={{lat:location.latitude, lng:location.longitude}}
	    	/>
	    ))}
	</GoogleMap>
))


class GoogleMaps extends Component {

	constructor(props) {
		super(props);
		this.state = {
			latitude: 0,
			longitude: 0,
		};
	}

	render() {
  		return (
			<div style={{ height: '500px', width: '500px' }}>
				<MyMapComponent
					isMarkerShown
					googleMapURL={"https://maps.googleapis.com/maps/api/js?key=" + config.key + "&v=3.exp&libraries=geometry,drawing,places"}
					loadingElement={<div style={{ height: '100%' }} />}
					containerElement={<div style={{ height: '100%' }} />}
					mapElement={<div style={{ height: '100%' }} />}
					locations={this.props.state.locations}
				/>
			</div>
		)
	}
}


export default GoogleMaps;