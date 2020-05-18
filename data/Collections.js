const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://EI1053:Emergentes1053@ei1053-hugdf.mongodb.net/test?retryWrites=true&w=majority'

var Schema = mongoose.Schema

var Collection = new Schema({
    name : {type: String},
    description : {type: String},
})

module.exports = mongoose.model("Collection",Collection)



