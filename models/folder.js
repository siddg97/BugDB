const mongoose = require('mongoose');
const scheme = mongoose.Schema;

const FolderSchema = new scheme({
	title: {
		type: String,
		required: true
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

module.exports = Folder = mongoose.model('Folder',FolderSchema);
