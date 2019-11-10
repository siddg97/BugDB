const validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function verifyBugData(data) {

	let errors = {};

	//Convert empty fields
	data.title       = !isEmpty(data.title) ? data.title : '';
	data.description = !isEmpty(data.description) ? data.description : '';
	data.status      = !isEmpty(data.status) ? data.status : ''
	if(validator.isEmpty(data.title)){
		errors.title = 'Title is a required field'
	}

	if(validator.isEmpty(data.description)){
		errors.description = 'Description is a required field'
	}

	if(validator.isEmpty(data.status)){
		errors.status = `You have to choose a status`
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
