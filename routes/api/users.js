const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

// Load input validations
const validateRegister = require("../../validation/register");
const validateLogin = require("../../validation/login");

// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public
router.post("/register", (req, res) => {
	// Form validation
	const {errs, isValid} = validateRegister(req.body);

	// Check validation results
	if(!isValid){
		return res.status(400).json(errs);
	}

	User.findOne({email: req.body.email})
	.then(user => {
		if(user){
			return res.status(400).json({email: "Email already exists!"});
		} else {
			const newUser = new User({
				name: req.body.name,
				email:req.body.email,
				password: req.body.password
			});

			// Hash password before saving in DB
			bcrypt.genSalt(10,(err,salt) => {
				bcrypt.hash(newUser.password, salt, (err,hash) =>{
					if(err){
						throw err;
					}
					newUser.password = hash;
					newUser.save()
					.then(user => res.json(user))
					.catch(err => console.log(err));
				});
			});
		}
	});
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login",(req, res) => {
	// Form validation
	const {errs, isValid} = validateLogin(req.body);

	// Check validation
	if(!isValid){
		return res.status(400).json(errs);
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find user by email
	User.findOne({email}).then(user => {
		if(!user){
			return res.status(400).json({emailnotfound: "Email not found!"});
		}

		// Check the password
		bcrypt.compare(password, user.password).then(isMatch => {
			if(isMatch) {
				// User authenticated
				const payload = {
					id: user.id,
					name: user.name
				};

				// sign token
				jwt.sign(payload, keys.secretOrKey, {expiresIn: 31556926},(err, token) => {
					res.json({
						success: true,
						token: "Bearer " + token
					});
				});
			} else {
				return res.status(400).json({passwordincoorect: "Invalid passwprd!!"});
			}
		});
	});
});

module.exports = router;