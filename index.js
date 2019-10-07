require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');
const users = require('./routers/users.js');

var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');

const PORT = process.env.PORT;

// Initialsize and configure express backend
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// logging functionality
var logDir = path.join(__dirname,'log');
// make log directory if it doesnt exist
fs.existsSync(logDir) || fs.mkdirSync(logDir);
// create a rotating file stream to write to
var accessLogStream = rfs('access.log', {
	size:'256K',
	interval:'1d',
	path: logDir
})

// setup logger for express
app.use(morgan('combined', { stream: accessLogStream }));

// set up and connect MongoDB
const db = process.env.MONGO_URI;
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true})
	.then(() => console.log(">>>>>>>>>> Connected to MongoDB"))
	.catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport configuration
require('./passport.js')(passport);

// Routes
app.use('/api/users',users);

app.listen(PORT, () => console.log('>>>>>>>>>> Server listening on port '+PORT+' !'));