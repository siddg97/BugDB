const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const users = require("./routes/api/users");

const app = express();

// Body Parser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

// DB config
const url = require('./config/keys.js').dbURL;

// DB connection
mongoose.connect(url, {useNewUrlParser: true})
.then(() => console.log("=== MongoDB connected now ==="))
.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Routes
app.use("/api/user",users);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server listening on port '+ port + '!'));