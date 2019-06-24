# LetWork Server

### Dependencies:
- __Package__:
  + **express**
  + **body-parser**
  + **cors**
  + **mongoose**
- __Global__:
  + __nodemon__: `npm install -g nodemon`

## Running ans Set-up:
- First install MongoDB Database: check [here](https://docs.mongodb.com/manual/administration/install-community/).
- After installing make a new MongoDB Database:
 + `$ mongo`
 + `use <db_name>`
- Now the database is running!
- Define the data scheme in a file like __`<db_name>.model.js`__
- Example of a `users` database scheme:
```javascript
// user.model.js

const mongoose = require('mongoose');
const scheme = mongoose.Schema;

let User = new scheme({
	UID:{
		type: String
	},
	username:{
		type: String
	},
	passw:{
		type: String
	},
	pName:{
		type: String
	},
	sex:{
		type: String
	},
});

module.exports = mongoose.model('User', User);
```

## Testing our Database:
- Our database (as of now) is made just for a very basic user profile.
- it supports the following queries:
  + `'localhost:3000/users'` - Display all the stored users as an array of JSON objects. [HTTP GET]
  + `'localhost:3000/users/$id'` - here `$id` refers to the id of the user which is assigned automatically by our db. This query displays the info about user with the associated id given. [HTTP GET]
  + `'localhost:3000/users/add'` - Add a new user and its info to the database. [HTTP POST]
  + `'localhost:3000/users/update/:id'` - Update an existing users info in the database. [HTTP POST]
- In order to test it you will need to download [Postman](https://www.getpostman.com/).
- Once you have postman running then you choose a certain protocol and then use it while your database is still running.

#### Documentation by:
> __Siddharth Gupta__
