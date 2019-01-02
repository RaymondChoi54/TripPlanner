const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.post('/timeEstimate', function(req, res) {
	res.sendStatus(200);
});


if(!module.parent) {
    app.listen(PORT, () => {
        console.log(`Server listening on port ${PORT}`);
    });
}