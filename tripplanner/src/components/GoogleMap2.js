import React from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import redDot from '../redDot.png';
import config from '../config'

export class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	onMapClicked(mapProps, map, clickEvent) {
		console.log(mapProps)
		console.log(map)
		console.log(clickEvent)
		console.log(this.s)
	}

  	render() {
    	return (
      		<Map 
      			google={this.props.google} 
      			zoom={12.5}
      			initialCenter={{
		        	lat: 40.74215837520133,
		        	lng: -73.98990542164569
		        }}
		        style={{ height: '500px', width: '500px' }}
		        onClick={this.onMapClicked}
      		>
 
        		<Marker onClick={(e) => this.onMarkerClick(e)} name={'Current location'} />
 
      		</Map>
    	);
  	}
}
 
export default GoogleApiWrapper({
	apiKey: (config.key)
})(MapContainer)