const mongoose = require('mongoose');
const scheme = mongoose.Schema;

let User = new scheme({
	UID:{
		type: String
	},
	username:{
		type: String
	},
	passw:{
		type: String
	},
	pName:{
		type: String
	},
	sex:{
		type: String
	},
});

module.exports = mongoose.model('User', User);