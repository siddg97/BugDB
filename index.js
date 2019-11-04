// enviornment vars
require('dotenv').config();
const MURI = process.env.MONGO_URI;
const PORT = process.env.PORT;

// libraries
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const passport = require('passport');

// Routers
const users = require('./routers/users.js');
const bugs = require('./routers/bugs.js');

//====================[START]==========================
// LOGGER: import libraries
var fs = require('fs');
var morgan = require('morgan');
var path = require('path');
var rfs = require('rotating-file-stream');

var logDir = path.join(__dirname,'log');
fs.existsSync(logDir) || fs.mkdirSync(logDir); 		// ++--> make log directory if it doesnt exist
var accessLogStream = rfs('server.log', {			// ++--> create a rotating file stream to write to
	size:'256K',
	interval:'1d',
	path: logDir
});
morgan.token('req-body', (req,res) => {return JSON.stringify(req.body)}); 	// create token for request body and response
const logformat = '\n:remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] ":referrer" ":user-agent" \nREQUEST BODY=":req-body"\n';
//=====================[END]============================

// Initialize and configure express backend
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// setup logger for express
app.use(morgan(logformat, { stream: accessLogStream }));

//=====================[START]============================
// set up and connect MongoDB
const db = MURI;
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true})
	.then(() => console.log("+++++++++> Connected to MongoDB"))
	.catch(err => console.error(err));
//=====================[END]==============================

// Passport middleware
app.use(passport.initialize());
// Passport configuration
require('./configs/passport.js')(passport);

// Routes

// [1]={ Sign In and Sign Up }
app.use('/api/user',users);

// [2]={ Get/add bugs }
app.use('/api/bugs',bugs);

app.listen(PORT, () => console.log('>>>>>>>>>> Server listening on port '+PORT+' !'));
