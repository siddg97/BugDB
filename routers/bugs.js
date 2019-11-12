require('dotenv').config();
const express = require('express');
const passport = require('passport');

// Initialize router
const router = express.Router();

// load Bug model
const Bug = require('../models/bug.js');



// ###############################
// ###############################
// ###    GET BUGS ENDPOINT    ###
// ### + Method = GET          ###
// ### + Desc = get all bugs   ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => {
	await Bug.find({openedBy:req.user.id})
		.then(bugs => res.send(bugs))
		.catch(err => {
			console.log(err)
		});
});



// ###############################
// ###############################
// ###    ADD BUG ENDPOINT     ###
// ### + Method = POST         ###
// ### + Desc = open new bug   ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.post('/', passport.authenticate('jwt', { session: false }), async (req,res) => {
	const d = new Date();
	const dateObj = {
		date: {
			day: d.getDate(),
			month: d.getMonth(),
			year: d.getFullYear()
		},
		time: {
			hh: d.getHours(),
			mm: d.getMinutes(),
			ss: d.getSeconds()
		}
	};

	const newBug = new Bug({
		title: req.body.title,
		openedBy: req.user.id,
		status: req.body.status,
		openedOn: dateObj,
		description: req.body.description
	});

	newBug.save()
		.then(bug => res.json(bug))
		.catch(err => console.log(err));
})



// ###############################
// ###############################
// ###   DELTE BUG ENDPOINT    ###
// ### + Method = DELETE       ###
// ### + Desc = deleter bug    ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.delete('/delete/:id', passport.authenticate('jwt', { session: false }), (req, res) => {

	Bug.findById(req.params.id)
		.then(bug => {
			bug.remove()
				.then(() => res.json({ success: true }))
		})
		.catch(err => console.log(err));

})


// ###############################
// ###############################
// ###   UPDATE BUG ENDPOINT   ###
// ### + Method = POST         ###
// ### + Desc = update bug     ###
// ### + Access = protected    ###
// ###############################
// ###############################
router.post('/update', passport.authenticate('jwt', { session: false }), (req,res) => {
	let bugfields = {};
	if (req.body.title){
		bugfields.title = req.body.title;
	}
	if (req.body.status) {
		bugfields.status = req.body.status;
	}
	if (req.body.description){
		bugfields.description = req.body.description;
	}

	Bug.findOneAndUpdate({ _id: req.body.id }, { $set: bugfields }, { new: true, useFindAndModify: false })
		.then(bug => res.json(bug))
		.catch(err => console.log(err));
});


module.exports = router;
