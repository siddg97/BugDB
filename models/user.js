const mongoose = require('mongoose');
const scheme = mongoose.Schema;

// create scheme
const UserSchema = new scheme({
	name:{
		type:String,
		required:true
	},
	email:{
		type:String,
		required:true
	},
	password:{
		type:String,
		required:true
	},
	joined:{
		type:Date,
		defualt:Date.now()
	}
});

module.exports = User = mongoose.model('users',UserSchema);

// {
//     "UID":,
//     "Username": (string),
//     "Password": (string),
//     "Prefer Name": (string),
//     "Gender": (int),
//     "Contacts": {
//         "email": (string),
//         "LinkedIn": (string),
//         "Github": (string),
//     },
//     "Interest": (array - boolean),
//     "Courses": (array - string),
//     "Skillsets": (array - object),
//     "Bios": (string),
//     "Availabilities": {
//         "AvailabilitiesAM": (array - boolean),
//         "AvailabilitiesPM": (array - boolean),
//         "AvailabilitiesPM2": (array - boolean),
//     },
// }
