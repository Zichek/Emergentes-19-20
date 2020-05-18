const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://EI1053:Emergentes1053@ei1053-hugdf.mongodb.net/test?retryWrites=true&w=majority'

var Schema = mongoose.Schema

var Coin = new Schema({
},{strict: false})

module.exports = mongoose.model("Coin",Coin)