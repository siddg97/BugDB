require('dotenv').config();
const express = require('express');

// Initialize router
const router = express.Router();

// load validator

const verifyBugData = require('../validators/bug.js');

// load Bug model
const Bug = require('../models/bug.js');


// ###############################
// ###############################
// ###    ADD BUG ENDPOINT     ###
// ### + Method = POST         ###
// ### + Desc = open new bug   ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.post('/', (req,res) => {
	const { errors, isValid } = verifyBugData(req.body);
	// check the validator output
	if(!isValid){
		return res.status(400).json(errors);
	}
	const newBug = new Bug({
		title: req.body.title,
		openedBy: req.body.openedBy,
		status: req.body.status,
		openedOn: Date.now(),
		description: req.body.description
	});
	newBug.save()
	Bug.find({openedBy: req.body.openedBy})
		.then(bugs => res.send(bugs))
		.catch(err => console.log(err));
})


// ###############################
// ###############################
// ###    GET BUGS ENDPOINT    ###
// ### + Method = GET          ###
// ### + Desc = get all bugs   ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.get('/:uid', (req, res) => {
	Bug.find({openedBy:req.params.uid})
		.then(bugs => res.send(bugs))
		.catch(err => {
			res.status((404)).json(err);
			console.log(err)
		});
});

module.exports = router;
