const validator = require('validator');
const isEmpty = require('is-empty');

// Register/sign-up validator
module.exports = function verifySignUp(data) {
	let errors={};

	// Convert empty fields to ""
	data.name = !isEmpty(data.name) ? data.name : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.pass = !isEmpty(data.pass) ? data.pass : "";
	data.pass2 = !isEmpty(data.pass2) ? data.pass2 : "";

	// Check name
	if(validator.isEmpty(data.name)) {
		errors.name = "Name is a required field";
	}

	// Check email
	if(validator.isEmpty(data.email)){
		errors.email = "Email is a required field";
	} else if(!validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// Check passwords
	if(validator.isEmpty(data.pass)){
		errors.pass = "Password is a required field";
	}

	if(validator.isEmpty(data.pass2)){
		errors.pass2 = "Confirm Password is a required field";
	}

	if(!validator.isLength(data.pass,{ min:8, max:32 })){
		errors.pass = "Password must be between 8-32 characters";
	}

	if(!validator.equals(data.pass,data.pass2)){
		errors.pass2 = "Passwords do not match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

// Sign In validator
module.exports = function verfiySignIn(data) {
	let errors = {};

	// Convert empty fields to ""
	data.email = !isEmpty(data.email) ? data.email : "";
	data.pass  = !isEmpty(Data.pass) ? data.pass : "";

	// Check Email
	if(validator.isEmpty(data.email)){
		errors.email = "Email field is required";
	} else if(!validator.isEmail(data.email)){
		errors.email = "Email is invalid";
	}

	// Check password
	if(validator.isEmpty(data.pass)){
		errors.pass = "Password is a required field";
	}

	return {
			errors,
			isValid: isEmpty(errors)
	};
};
