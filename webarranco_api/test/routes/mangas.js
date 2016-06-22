"use strict";

var assert = require('chai').assert,
	request = require('request-promise'),
	utilsClass = require('./../ressources/variables.js'),
	utils = new utilsClass()
;

describe("Test routes GET", function() {

	let response = [],
		routes = [
			'route'
		]
	;

	beforeEach(function(done){

		response = [];

		request(utils.getApiUrl()+"/test/"+routes.shift())

		.then(function(res) {
			response = JSON.parse(res);
			// console.log(response[0]._source);
			done();
		});
	});

	it("test : should return test", function(){
		assert.equal(response[0]._type, 'test');
	});
});