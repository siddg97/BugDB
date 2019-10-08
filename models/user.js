const mongoose = require('mongoose');
const scheme = mongoose.Schema;

// create schema for Links
const LinkSchema = new scheme({
	title:{
		type: String,
		required: true
	},
	url:{
		type:String,
		required: true
	},
	dir:{
		type:String,
		required: true
	},
	createdOn:{
		type:Date,
		default:Date.now()
	},
	notes:{
		type:String,
		default:""
	}
});

//create schema for directories of links
const DirSchema = new scheme({
	name:{
		type: String,
		required: true
	},
	links:{
		type: [LinkSchema],
		default: []
	},
	subDir:{
		type: [this],
		default: []
	}
});

// create User schema
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
		default:Date.now()
	},
	links:{
		type: [LinkSchema],
		default: []
	},
	dirs:{
		type: [DirSchema],
		default: []
	}
});

module.exports = User = mongoose.model('users',UserSchema);
