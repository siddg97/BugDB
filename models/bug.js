const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const BugSchema = new scheme({
	title: {
		type: String
	},
	openedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	},
	status: {
		type: String
	},
	openedOn: {
		type: String
	},
	description: {
		type: String
	}
});

module.exports = Bug = mongoose.model('Bug',BugSchema);
