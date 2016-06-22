"use strict";

const 
	express = require('express'),
	router = express.Router(),
	testControllerClass = require('./../controllers/test'),
	testController = new testControllerClass()
;

/*******************/
/*       GET       */
/*******************/

/*
 * POST
 *
 * Body
 * @object filters 		: example {limit: 10}
 */
router.post('/route', function(req, res) {

	let filters = req.body.filters;

	testController.route(filters, function(response) {
		res.status(200).send(response);
	});
});


module.exports = router;
