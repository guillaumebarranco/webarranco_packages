"use strict";

var request = require('request-promise'),
	utilsClass = require('./test/ressources/variables.js'),
	utils = new utilsClass()
;

function testSynchro() {

	var options = {
	    method: 'POST',
	    uri: utils.getApiUrl(),
	    body: {
	    },
	    json: true // Automatically stringifies the body to JSON 
	};

	request(options)

	.then(function() {
		console.log('finished');
	});
}
