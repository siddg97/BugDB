require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Initialize router
const router = express.Router();

// load validators
const verifySignUp = require('../validators/register.js');
const verifySignIn = require('../validators/login.js');

// load user model
const User = require('../models/user.js');


// ###############################
// ###############################
// ###    REGISTER ENDPOINT    ###
// ### 					       ###
// ### + Method = POST         ###
// ### + Desc = register user  ###
// ### + Access = public       ###
// ###############################
// ###############################
router.post('/register', (req,res) => {
	// Call validator
	const { errors,isValid } = verifySignUp(req.body);

	// check the validator output
	if (!isValid){
		return res.status(400).json(errors);
	}

	User.findOne({ email: req.body.email })
		.then(user => {
			if(user){
				return res.status(400).json({email: "Email already exists. Please log in instead."});
			} else {
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.pass,
					joined: Date.now()
				});
				// encrypt password
				bcrypt.genSalt(10,(err, salt) => {
					bcrypt.hash(newUser.password,salt, (err,hash) => {
						if(err) throw err;
						newUser.password = hash;
						newUser.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		}
	)
	.catch(err => console.log(err));
});

// ##########################################
// ##########################################
// ###           LOGIN ENDPOINT           ###
// ### 					                  ###
// ### + Method = POST                    ###
// ### + Desc = login user and return JWT ###
// ### + Access = public                  ###
// ##########################################
// ##########################################
router.post('/login',(req,res) => {
	// Call validator
	const { errors,isValid } = verifySignIn(req.body);

	// check the validator output
	if(!isValid){
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const pass  = req.body.pass;

	// Find user
	User.findOne({ email }).then(user => {
		// Check if user exists
		if(!user){
			return res.status(404).json({ emailnotfound:"Email not found" });
		}

		bcrypt.compare(pass,user.password)
			.then(isMatch => {
				if(isMatch){
					// Create JWT jwt_payload
					const payload = {
						id: user.id,
						name: user.name
					};

					jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 6000 }, (err,token) => {
						res.json({
							success:true,
							token: "Bearer "+token
						});
					});
				} else {
					return res.status(400).json({ passwordIncorrect: "Incorrect password." });
				}
			})
			.catch(err => console.log(err));
		}
	);
});

module.exports = router;
