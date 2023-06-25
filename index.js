require('dotenv').config()
const express = require ('express')
const app = express()
const methodOverride = require('method-override')
const  mongoose = require('mongoose')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(methodOverride('_method'))
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use ('/places', require('./controllers/places'))


app.get ('/', function (req, res){
res.render('Home')
})


//mongoose connection
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, ()=> {
    console.log('connectd to Mongo DB:', process.env.MONGO_URI)
})

app.get ('*', function (req, res){
res.render('error404')
})

app.listen(process.env.PORT)

//Final
