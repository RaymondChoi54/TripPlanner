import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import redDot from '../redDot.png';
import blueDot from '../blueDot.png';
import config from '../config'

import { connect } from 'react-redux';

const defaultProps = {
    center: {
    	lat: 40.74215837520133,
    	lng: -73.98990542164569
    },
    zoom: 12.5
};

const Pointer = ({ text }) => <img src={blueDot} alt={text} width="18" height="18" />;
const AnyReactComponent = ({ text }) => <img src={redDot} alt={text} width="18" height="18" />;

// const GoogleMap = ({ state, onSelectLocation }) => {

//   	if(state.selection) {
//   		return (
// 			<div style={{ height: '500px', width: '500px' }}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: config.key}}
// 					defaultCenter={defaultProps.center}
// 					defaultZoom={defaultProps.zoom}
// 					onClick={location => onSelectLocation(location.lat, location.lng)}
// 				>
// 	          		<AnyReactComponent
// 	          			lat={state.latitude}
// 	          			lng={state.longitude}
// 	          			text="sfdgsdfg"
// 	          		/>
// 		          	{state.locations.map((location, index) => (
// 		          		<AnyReactComponent
// 		          			key={index}
// 		          			lat={location.latitude}
// 		          			lng={location.longitude}
// 		          			text={location.name}
// 		          		/>
// 		          	))}
// 				</GoogleMapReact>
// 			</div>
// 		)
//   	} else {
// 		return (
// 			<div style={{ height: '500px', width: '500px' }}>
// 				<GoogleMapReact
// 					bootstrapURLKeys={{ key: config.key}}
// 					defaultCenter={defaultProps.center}
// 					defaultZoom={defaultProps.zoom}
// 					onClick={location => onSelectLocation(location.lat, location.lng)}
// 				>
// 		          	{state.locations.map((location, index) => (
// 		          		<AnyReactComponent
// 		          			key={index}
// 		          			lat={location.latitude}
// 		          			lng={location.longitude}
// 		          			text={location.name}
// 		          		/>
// 		          	))}
// 				</GoogleMapReact>
// 			</div>
// 		)
// 	}
// }

class GoogleMap extends Component {

	constructor(props) {
		super(props);
		this.state = {
			latitude: 0,
			longitude: 0
		};
	}

	render() {
	  	if(this.props.state.selection) {
	  		return (
				<div style={{ height: '500px', width: '500px' }}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: config.key}}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						onClick={location => {
							this.props.onSelectLocation(location.lat, location.lng)
							this.setState({latitude: location.lat, longitude: location.lng})
						}}
					>
		          		<Pointer
		          			lat={this.state.latitude}
		          			lng={this.state.longitude}
		          			text="Pointer"
		          		/>
			          	{this.props.state.locations.map((location, index) => (
			          		<AnyReactComponent
			          			key={index}
			          			lat={location.latitude}
			          			lng={location.longitude}
			          			text={location.name}
			          		/>
			          	))}
					</GoogleMapReact>
				</div>
			)
	  	} else {
			return (
				<div style={{ height: '500px', width: '500px' }}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: config.key}}
						defaultCenter={defaultProps.center}
						defaultZoom={defaultProps.zoom}
						onClick={location => this.props.onSelectLocation(location.lat, location.lng)}
					>
			          	{this.props.state.locations.map((location, index) => (
			          		<AnyReactComponent
			          			key={index}
			          			lat={location.latitude}
			          			lng={location.longitude}
			          			text={location.name}
			          		/>
			          	))}
					</GoogleMapReact>
				</div>
			)
		}
	}
}

export default GoogleMap;