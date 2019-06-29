const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateLogin(data) {
	let errs = {};
	
	// Convert empty fields to an empty string so we can use validator functions
	data.email = !isEmpty(data.email) ? data.email : "";
	data.password = !isEmpty(data.password) ? data.password : "";
	
	// Email checks
	if (Validator.isEmpty(data.email)) {
		errs.email = "Email field is required";
	} else if (!Validator.isEmail(data.email)) {
		errs.email = "Email is invalid";
	}
	// Password checks
	if (Validator.isEmpty(data.password)) {
		errs.password = "Password field is required";
	}
	return {
		errs,
		isValid: isEmpty(errors)
	};
};