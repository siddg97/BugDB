const validator = require('validator');
const isEmpty = require('is-empty');

// Register/sign-up validator
module.exports = function verifySignUp(data) {
	let errors={};

	// Convert empty fields to ""
	data.name = !isEmpty(data.name) ? data.name : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.password2 = !isEmpty(data.password2) ? data.password2 : "";

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
	if(validator.isEmpty(data.password)){
		errors.password = "Password is a required field";
	}

	if(validator.isEmpty(data.password2)){
		errors.password2 = "Confirm Password is a required field";
	}

	if(!validator.isLength(data.password,{ min:8, max:32 })){
		errors.password = "Password must be between 8-32 characters";
	}

	if(!validator.equals(data.password,data.password2)){
		errors.password2 = "Passwords do not match";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
