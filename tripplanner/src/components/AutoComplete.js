import React, { Component } from 'react';
import SearchBar from 'material-ui-search-bar';

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class AutoComplete extends Component {

	constructor(props) {
		super(props);
		this.state = {
			city: '',
			query: ''
		};
		//this.handleScriptLoad = this.handleScriptLoad.bind(this);
    	this.handlePlaceSelect = this.handlePlaceSelect.bind(this);
	}

	componentDidMount() { 
		// Declare Options For Autocomplete 
		var options = { types: ['(cities)'] }; 

		// Initialize Google Autocomplete 
		/*global google*/
		this.autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options); 
		// Fire Event when a suggested name is selected
		this.autocomplete.addListener('place_changed', this.handlePlaceSelect); 
	}

	handlePlaceSelect() {

		// Extract City From Address Object
		let addressObject = this.autocomplete.getPlace();
		let address = addressObject.address_components;

		// Check if address is valid
		if(address) {
			// Set State
			this.setState({
				city: address[0].long_name,
				query: addressObject.formatted_address,
			});
		}
	}

	render() {
  		return (
  			<MuiThemeProvider muiTheme={getMuiTheme()}>
  			<div>    
	  			<SearchBar id="autocomplete" placeholder="" hintText="Search City" value={this.state.query} 
	  				onChange={() => console.log()} 
	  				onRequestSearch={() => console.log()}
		          	style={{
		            	margin: '0 auto',
		            	maxWidth: 800,
		        	}}
	        	/>
  			</div>
  			</MuiThemeProvider>
		)
	}
}


export default AutoComplete;