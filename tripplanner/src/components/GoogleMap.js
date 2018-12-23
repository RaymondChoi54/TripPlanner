import React from 'react';
import GoogleMapReact from 'google-map-react';
import redDot from'../redDot.png';

const AnyReactComponent = ({ text }) => <img src={redDot} alt={text} width="18" height="18" />;

const ContainMap = ({ state, onSelectLocation }) => {
	const defaultProps = {
	    center: {
	    	lat: 40.74215837520133,
	    	lng: -73.98990542164569
	    },
	    zoom: 12.5
  	};

  	if(state.selection) {
  		return (
			<div style={{ height: '500px', width: '500px' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyCl3R6ucF5xAzTqSgAzMY55DtoK_wWUZzY'}}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					onClick={location => onSelectLocation(location.lat, location.lng)}
				>
					<AnyReactComponent
	          			lat={state.latitude}
	          			lng={state.longitude}
	          			text="sfdgsdfg"
	          		/>
		          	{state.locations.map((location, index) => (
		          		<AnyReactComponent
		          			key={index}
		          			lat={location.latitude}
		          			lng={location.longitude}
		          			text={location.name}
		          		/>
		          	))}
				</GoogleMapReact>
				{"sdasdgasg"}
			</div>
		)
  	} else {
		return (
			<div style={{ height: '500px', width: '500px' }}>
				<GoogleMapReact
					bootstrapURLKeys={{ key: 'AIzaSyCl3R6ucF5xAzTqSgAzMY55DtoK_wWUZzY'}}
					defaultCenter={defaultProps.center}
					defaultZoom={defaultProps.zoom}
					onClick={location => onSelectLocation(location.lat, location.lng)}
				>
		          	{state.locations.map((location, index) => (
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

export default ContainMap;