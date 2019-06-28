const mongoose = require('mongoose');
const scheme = mongoose.Schema;

/* Skill-set data object */
let skSet = new scheme({
	type: String,
	type_name: String,
	length: Number,
	description: String
});

 /* User data-object */
let User = new scheme({
	UID: Number,
	username: String,
	password: String,
	preferredName: String,
	gender: String,
	contacts:{
		email: String,
		github: String,
		linkedIn: String
	},
	interests: [Boolean],
	courses: [String],
	skillset: [skSet],
	bios: String,
	availability:{
		am: [Boolean],
		pm: [Boolean],
		pm2: [Boolean]
	},
});

module.exports = mongoose.model('User', User);

// {
// 	"UID":,
// 	"Username": (string),
// 	"Password": (string),
// 	"Prefer Name": (string),
// 	"Gender": (int),
// 	"Contacts": {
// 		"email": (string),
// 		"LinkedIn": (string),
// 		"Github": (string),
// 	},
// 	"Interest": (array - boolean),
// 	"Courses": (array - string),
// 	"Skillsets": (array - object),
// 	"Bios": (string),
// 	"Availabilities": {
// 		"AvailabilitiesAM": (array - boolean),
// 		"AvailabilitiesPM": (array - boolean),
// 		"AvailabilitiesPM2": (array - boolean),
// 	},
// }