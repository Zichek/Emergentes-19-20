const S = require('./server')
var mongoose = require('mongoose');
var Users = require('./data/Users');
var Collections = require('./data/Collections');
var Cars = require('./data/Cars');
var Coins = require('./data/Coins');


//User   {id: Number, name: String , passwd: String}
//Collections   {id: Number, name: String , creatorID: Number}
//Post   {id: Number, text: String,  authorID: Number}
//Posts  {'blogID':{'postID1': .., 'postID2': ...}}


exports.createUser = data =>
	new Promise((accept, reject) => {
		console.log("añadiendo")
		var newUser = new Users({
			username: data.username,
			password: data.password,
			name: data.name,
			email: data.email,
		})
		console.log(newUser);
		newUser.save(function (err) {
			if (err) throw err;
			console.log("Guardado!");
		});
		accept(data)
	})

exports.getUsers = _ =>
	new Promise((accept, reject) => {
		var UsersObj = Users.find({})
		var promise = UsersObj.exec(function (err, docs) {
			console.log(docs)
			accept(docs)
		});
	})

exports.getUserData = id => Users[id] || null

// COLLECTION
exports.createCollection = data =>
	new Promise((accept, reject) => {
		console.log("añadiendo")
		var newCollection = new Collections({
			name: data.name,
			description: data.description,
		})
		newCollection.save(function (err) {
			if (err) throw err;
			console.log("Guardado!");
		});
		accept(data)
	})

exports.getCollections = _ =>
	new Promise((accept, reject) => {
		var CollectionsObj = Collections.find({})
		var promise = CollectionsObj.exec(function (err, docs) {
			console.log(docs)
			accept(docs)
		});
	})
exports.getCollectionData = collectionId => Collection[collectionId] || null

exports.searchCollection = (text) => Object.keys(Collection).filter(b => Collection[b].name.includes(text))
//.map(b => Blogs[b].name)

// CARS
exports.createCar = data =>
	new Promise((accept, reject) => {
		console.log("añadiendo")
		var newCar = new Cars(data)
		console.log(newCar);
		newCar.save(function (err) {
			if (err) throw err;
			console.log("Guardado!");
		});
		accept(data)
	})

exports.getCars = _ =>
	new Promise((accept, reject) => {
		var CarsObj = Cars.find({})
		var promise = CarsObj.exec(function (err, docs) {
			console.log(docs)
			accept(docs)
		});
	})

// COINS
exports.createCoin = data =>
	new Promise((accept, reject) => {
		console.log("añadiendo")
		var newCoin = new Coin({
			//TODO
		})
		newCoin.save(function (err) {
			if (err) throw err;
			console.log("Guardado!");
		});
		accept(data)
	})

exports.getCoin = _ =>
	new Promise((accept, reject) => {
		var CoinsObj = Coins.find({})
		var promise = CoinsObj.exec(function (err, docs) {
			console.log(docs)
			accept(docs)
		});
	})

