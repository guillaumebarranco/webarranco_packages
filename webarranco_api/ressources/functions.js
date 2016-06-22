"use strict";

class UsefulFunctions {

	sendError(response, message) {
		response.status = 'error';
		response.message = message;
		return response;
	}

	throwConstructorError(error) {
		console.log('ERROR : '+error);
		process.exit();
	}
}

module.exports = UsefulFunctions;
