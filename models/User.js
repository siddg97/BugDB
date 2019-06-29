const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	}
});
module.exports = User = mongoose.model("users", UserSchema);

// const mongoose = require('mongoose');
// const scheme = mongoose.Schema;

// /* Skill-set data object */
// let skSet = new scheme({
// 	type: String,
// 	type_name: String,
// 	length: Number,
// 	description: String
// });

//  /* User data-object */
// let User = new scheme({
// 	UID: Number,
// 	username: String,
// 	password: String,
// 	preferredName: String,
// 	gender: String,
// 	contacts:{
// 		email: String,
// 		github: String,
// 		linkedIn: String
// 	},
// 	interests: [Boolean],
// 	courses: [String],
// 	skillset: [skSet],
// 	bios: String,
// 	availability:{
// 		am: [Boolean],
// 		pm: [Boolean],
// 		pm2: [Boolean]
// 	},
// });