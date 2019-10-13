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
		defualt:Date.now
	}
});

module.exports = User = mongoose.model('User',UserSchema);
