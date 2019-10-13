require('dotenv').config();
const express = require('express');
const passport = require("passport");


// Initialize router
const router = express.Router();

// load folder model
const Folder = require('../models/folder.js');


// ###############################
// ###############################
// ###   ADD FOLDER ENDPOINT   ###
// ### 					       ###
// ### + Method = POST         ###
// ### + Desc = add new folder ###
// ### + Access = user         ###
// ###############################
// ###############################
router.post('/create',
	async (req,res) => {
		const OWNER = req.body.userid;
		const newFolder = await new Folder({
			title: req.body.folderTitle,
			owner: OWNER
		});
		newFolder.save()
			.then(folder => res.json(folder))
			.catch(err => console.error(err));
	}
);


// ###############################
// ###############################
// ###   GET FOLDERS ENDPOINT  ###
// ### 					       ###
// ### + Method = GET          ###
// ### + Desc = get folders    ###
// ###   for given user.       ###
// ### + Access = user         ###
// ###############################
// ###############################
router.get('/', async (req,res) => {
		const USER = req.body.userid;
		Folder.find({ owner: USER })
			.then(folders => res.json(folders))
			.catch(err => console.error(err));
	}
);


// ###############################
// ###############################
// ###  GET A FOLDER ENDPOINT  ###
// ### 					       ###
// ### + Method = GET          ###
// ### + Desc = get a folder   ###
// ###   for given _id.        ###
// ### + Access = user         ###
// ###############################
// ###############################
router.get('/:fid',async (req,res) => {
	const FID = req.params.fid;
	Folder.findById(FID)
		.then(folder => res.json(folder))
		.catch(err => console.error(err));
});


// ##################################
// ##################################
// ###  UPDATE A FOLDER ENDPOINT  ###
// ### 					          ###
// ### + Method = PATCH           ###
// ### + Desc = edit a folder     ###
// ### + Access = user            ###
// ##################################
// ##################################
router.patch('/edit', async (req,res) => {
	const FID = req.body.fid;

	Folder.findByIdAndUpdate(FID,{title:req.body.newTitle},{new:true, useFindAndModify:false})
		.then(folder => res.json(folder))
		.catch(err => console.error(err));
});


// ##################################
// ##################################
// ###  DELETE A FOLDER ENDPOINT  ###
// ### 					          ###
// ### + Method = DELETE          ###
// ### + Desc = delete a folder   ###
// ### + Access = user            ###
// ##################################
// ##################################
router.delete('/delete/:fid', async (req,res) => {
	Folder.findById(req.params.fid)
		.then(folder => {
			folder.remove()
				.then(() => res.json( {success:true} ))
		})
		.catch(err => console.error(err));
});

module.exports = router;
