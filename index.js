require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const PORT = process.env.PORT;

// Initialsize and configure express backend
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// set up and connect MongoDB
const db = process.env.MONGO_URI;
mongoose.connect(db,{useNewUrlParser: true,useUnifiedTopology: true})
	.then(() => console.log(">>>>>>>>>> Connected to MongoDB"))
	.catch(err => console.log(err));

app.listen(PORT, () => console.log('>>>>>>>>>> Server listening on port '+PORT+' !'));

// {
//     "UID":,
//     "Username": (string),
//     "Password": (string),
//     "Prefer Name": (string),
//     "Gender": (int),
//     "Contacts": {
//         "email": (string),
//         "LinkedIn": (string),
//         "Github": (string),
//     },
//     "Interest": (array - boolean),
//     "Courses": (array - string),
//     "Skillsets": (array - object),
//     "Bios": (string),
//     "Availabilities": {
//         "AvailabilitiesAM": (array - boolean),
//         "AvailabilitiesPM": (array - boolean),
//         "AvailabilitiesPM2": (array - boolean),
//     },
// }
