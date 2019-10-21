const validator = require('validator');
const isEmpty = require('is-empty');

// Sign In validator
module.exports = function verfiySignIn(data) {
	let errors = {};

	// Convert empty fields to ""
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password  = !isEmpty(data.password) ? data.password : "";

	// Check Email
	if(validator.isEmpty(data.email)){
		errors.email = "Email field is required";
	} else if(!validator.isEmail(data.email)){
		errors.email = "Email is invalid";
	}

	// Check password
	if(validator.isEmpty(data.password)){
		errors.password = "Password is a required field";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
