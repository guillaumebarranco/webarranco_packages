"use strict";

const
	testProviderClass = require('./../providers/test'),
	testProvider = new testProviderClass()
;

class Test {

	getAlltests(filters, callback) {

		testProvider.getAlltests(filters, function(response) {
			callback(response);
		});
	}
}

module.exports = Test;
