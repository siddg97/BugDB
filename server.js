const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoutes = express.Router();
const PORT = process.env.PORT || 3000;

let User = require('./user.model.js')

app.use(cors());
app.use(bodyParser.json());

var url = 'mongodb://localhost:27017/users';
mongoose.connect(process.env.MONGODB_URI || url,{useNewUrlParser: true});
const connection = mongoose.connection;

connection.once('open',function(){
	console.log(">>> MongoDB datasbase is now connected!! <<<");
});

// return all available users from db
userRoutes.route('/').get(function(req,res){
	User.find(function(err, users){
		if(err) {
			console.log(err);
		} else {
			res.json(users);
		}
	});
});

// retrieve a user by providinh an ID
userRoutes.route('/:id').get(function(req,res){
	let id = req.params.id;
	User.findById(id, function(err,user){
		res.json(user);
	});
});

// add new users
userRoutes.route('/add').post(function(req,res){
	let user = new User(req.body);
	user.save()
	.then(user => {
		res.status(200).json({'user': 'user added successfully'});
	})
	.catch(err => {
		res.status(400).send('Addition of new user failed ;(');
	});
});


// update an existing user based on id
userRoutes.route('/update/:id').post(function(req,res){
	let id = req.params.id;
	User.findById(id, function(err,user){
		if(!user){
			res.status(404).send("data not found :/");
		} else {
			user.UID = req.body.UID;
			user.username = req.body.username;
			user.password = req.body.password;
			user.preferredName = req.body.preferredName;
			user.gender = req.body.gender;
			user.contacts = req.body.contacts;
			user.interests = req.body.interests;
			user.courses = req.body.courses;
			user.skillset = req.body.skillset;
			user.bios = req.body.bios;
			user.availability = req.body.availability;
			
			user.save().then(user => {
				res.json('User updated!');
			})
			.catch(err => {
				res.status(400).send("Update not possible :(");
			});
		}
	});
});

// UID: Number,
// 	username: String,
// 	password: String,
// 	preferredName: String,
// 	gender: String,
// 	contacts:{
// 		email: String,
// 		github: String,
// 		linkedIn: String
// 	},
// 	interests: [Boolean],
// 	courses: [String],
// 	skillset: [skSet],
// 	bios: String,
// 	availability:{
// 		am: [Boolean],
// 		pm: [Boolean],
// 		pm2: [Boolean]
// 	},

app.use('/users',userRoutes);


app.listen(PORT,function(){
	console.log("Server running on port: " + PORT);
});