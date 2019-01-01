import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AutoComplete extends Component {

	constructor(props) {
		super(props);
    	this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
	}

	componentDidMount() {
		const google = window.google;
		this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
		this.autocomplete.addListener('place_changed', this.handlePlaceSelect);
	}

	handlePlaceSelect() {
		var addressObject = this.autocomplete.getPlace();
		var address = addressObject.address_components;

		if(address) {
			var location = this.autocomplete.getPlace().geometry.location;
			this.props.addLocationMap(addressObject.name, location.lat(), location.lng());
			this.props.updatePath(this.props.state.locations);
		}
	}

	render() {
  		return (
  			<MuiThemeProvider muiTheme={getMuiTheme()}>   
	  			<SearchBar id="autocomplete" placeholder="" hintText="Search Location"
	  				onChange={() => console.log()} 
	  				onRequestSearch={() => console.log("seach")}
		          	style={{
		            	margin: '0 auto',
		            	maxWidth: 800,
		        	}}
	        	/>
  			</MuiThemeProvider>
		)
	}
}


export default AutoComplete;