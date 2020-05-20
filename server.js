
const mongoose = require('mongoose');
const MONGODB = 'mongodb+srv://EI1053:Emergentes1053@ei1053-hugdf.mongodb.net/test?retryWrites=true&w=majority'

mongoose.connect(MONGODB, (err) => {     
    useNewUrlParser: true;
    useUnifiedTopology: true;
    if (err) throw err;   
    console.log('Mongoose connected!')
})

const bodyparser = require('body-parser')
const express    = require('express')

const control = require('./controllers')

const app = express() //API Main object
 
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())

app.use(control.middleware) //Done

app.use('/', express.static('public'))

app.get('/news', control.eventStream) //Stream of Server-side events

// USERS
app.post('/user', control.createUser);

app.get('/users/', control.getUsers)

app.get('/user/:id', control.getUserData ) //Done

// COLLECTION
app.get('/collections', control.getCollections ) //Done

app.post('/collection', control.createCollection ) //Done

app.get('/collection/:id', control.searchCollection )

// CARS
app.get('/cars', control.getCars )

app.post('/car', control.createCar )

// COINS

app.get('/coins', control.getCoins )

app.post('/coin', control.createCoin)

// app.get('/collection/:id', control.searchCollection ) //Done

//etc ...

const PORT = 8000
app.listen(PORT)
