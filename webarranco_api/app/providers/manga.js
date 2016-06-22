"use strict";

const request = require('request'),
	fs = require('fs'),
	functionClass = require('./../../ressources/functions'),
	functions = new functionClass()
;

Object.size = function(obj) {
    var size = 0, key;
    for (key in obj) { if (obj.hasOwnProperty(key)) { size++; } }
    return size;
};

class testProvider {

	constructor() {
	}

	getAlltests(filters, callback) {

		if(typeof filters !== "object") filters = {};
		if(typeof filters.order !== "undefined") filters.order = 'A-Z';


		if(typeof filters.limit === "undefined") filters.limit = 1000;

		global.elasticClient.search({

			index: 'tests',
			type: 'test',
			size: filters.limit

		}).then(function (resp) {
			var hits = resp.hits.hits;
			callback(hits);

		}, function (err) {
			// console.trace(err.message);
		});
	}

	simpleLimitSearch(match, limit, callback) {

		if(global.hasInternet) {

			global.elasticClient.search({

				index: 'tests',
				type: 'test',
				size: limit,
				body: {
					query : {
				      match: {
				        _all: match
				      }
				    }
				}

			}).then(function (resp) {
				var hits = resp.hits.hits;
				callback(hits);

			}, function (err) {
				callback(err);
			});

		} else {

			this.gettestsFromJSON(function(tests) {
				callback(tests.slice(tests.length - limit));
			});
		}
	}

}

module.exports = testProvider;
