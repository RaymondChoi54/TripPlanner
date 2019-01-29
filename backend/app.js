const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 5000;

const config = require('./config')
const googleMapsClient = require('@google/maps').createClient({
	key: config.key
});

app.use(bodyParser.urlencoded({extended: true}))
app.use(require("body-parser").json())
app.use(cors())

app.post('/timeEstimate', function(req, res) {
	console.log(req.body)
	// Check if valid //
	if(!req.body.locations || !req.body.dateTime) {
		console.log("Error: No locations or date & time");
		return res.sendStatus(400);
	}
	// Must have at least 2 locations
	if(!(req.body.locations.length >= 2)) {
		console.log("Error: Less than two locations");
		return res.sendStatus(400);
	}
	// All destinations must have a stay duration
	for(var i = 0; i < req.body.locations.length; i++) {
		if(i > 0 && req.body.locations[i].minutes < 0) {
			console.log("Error: Stay duration is not set at location " + i);
			return res.sendStatus(400);
		}
	}

	travelInfo(req.body.locations[0], req.body.locations[1], req.body.dateTime)
	.then((data) => {
		console.log(data)
	});


	console.log("Success")
	res.status(200).send({});
});

function travelInfo(origin, destination, startTime) {
	return new Promise(function(resolve, reject) {
		googleMapsClient.distanceMatrix({
		    origins: [{lat: origin.latitude, lng: origin.longitude }],
		    destinations: [{lat: destination.latitude, lng: destination.longitude }]
	  	}, function(err, response) {
	  		if(err) {
	  			reject(Error("Error: Could not get travel info"));
	  		}
	  		resolve({
	  			start: new Date(startTime).toString(),
	  			end: new Date(new Date(startTime).getTime() + response.json.rows[0].elements[0].duration.value * 1000).toString(),
	  			distance: response.json.rows[0].elements[0].distance.value,
	  			time: response.json.rows[0].elements[0].duration.value
	  		});
	  	});

	});
}


if(!module.parent) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}