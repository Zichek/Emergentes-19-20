const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://EI1053:Emergentes1053@ei1053-hugdf.mongodb.net/test?retryWrites=true&w=majority'

var User = new mongoose.Schema({

	username: {
		type: String,
		trim: true,
		required: true,
		unique: true
	},
	password: {
		type: String,
		trim: true,
		required: true
	},
	name: {
		type: String,
		trim: true,
		required: true,
	},
	email: {
		type: String,
		trim: true,
		required: true
	},
});



module.exports = mongoose.model("User", User)
