const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateRegister(data) {
	let errs = {};

	// convert empty fields to empty values so we can use Validator
	data.name = !isEmpty(data.name) ? data.name : "";
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	data.conf_pass = !isEmpty(data.conf_pass) ? data.conf_pass : "";

	// Check Name
	if(Validator.isEmpty(data.name)){
		errs.name = "Name is required!";
	}

	// Check and validate Email
	if(Validator.isEmpty(data.email)){
		errs.email = "Email is required!";
	} else if(!Validator.isEmail(data.email)){
		errs.email = "Invalid Email detected!";
	}

	// Password checks
	if(Validator.isEmpty(data.password)){
		errs.password = "Password is required!";
	}

	if(Validator.isEmpty(data.conf_pass)){
		errs.conf_pass = "Confirmation password is required!";
	}

	if(!Validator.isLength(data.password, {min:6, max:30})){
		errs.password = "Password must be more than 6 and max of 30 characters!";
	}

	if(!Validator.equals(data.password, data.conf_pass)){
		errs.conf_pass = "Passwords entered donot match!!";
	}

	return {
		errs,
		isValid: isEmpty(errs)
	}
};