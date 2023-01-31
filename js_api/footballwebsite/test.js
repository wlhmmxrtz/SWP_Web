var request = require('request');

var options = { 
  url: 'https://app.sportdataapi.com/api/v1/soccer/matches?apikey=96ff5510-a15e-11ed-99e1-b744a843a752&season_id=2100&status_code=3' 
};

function callback(error, response, body) {
	if (!error && response.statusCode == 200) {
		console.log(body);
	}
}

request(options, callback);