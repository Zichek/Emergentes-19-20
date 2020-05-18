const M = require('./model')

const SSE = require('express-sse') //Server-side events


exports.middleware = (req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Headers', 
	           'Origin, Content-Type, Accept')
    res.header('Cache-Control', 'no-cache')
	
	/*  
	//Todas las llamdas REST con token: user/345?token=asCDSAsa
	if (req.query && req.query.token != 'asCDSAsa'){ //Security token

		res.status(403)
		return
	} 
	*/
	
	next()
}

const STREAM = new SSE()

exports.eventStream = (req, res) => {

  console.log('Nueva conexion SSE ...')

  STREAM.init(req, res)

}

// exports.createUser = (req,res) => 	M.createUser(req.body).then(r => res.send({result: 'OK'}));

exports.createUser  = async (req, res) => res.send({result: await M.createUser(req.body)})

exports.getUsers    = async (req, res) => res.send({result: await M.getUsers()})

exports.getUserData = async (req, res) => res.send({result: await M.getUserData(req.param.id)})

exports.updateUser  = async (req, res) => res.send({result: await M.createUser(req.body,STREAM)}) //POST

exports.getCollections    = async (req, res) => res.send({result: await M.getCollections()})

exports.createCollection  = async (req, res) => res.send({result: await M.createCollection(req.body)}) //POST
									
exports.searchCollection  = async (req, res) => res.send({result: await M.searchCollection(req.param.id)})

exports.updateCollection = (req,res) => M.updateCollection(req.body.id,req.body).then(r => res.send({result:'OK'}));

// CARS
exports.getCars    = async (req, res) => res.send({result: await M.getCars()})

exports.createCar  = async (req, res) => res.send({result: await M.createCar(req.body)})

// COINTS
exports.getCoins    = async (req, res) => res.send({result: await M.getCoins()})

exports.createCoin  = async (req, res) => res.send({result: await M.createCoin(req.body)})

