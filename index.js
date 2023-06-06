require('dotenv').config()
const express = require ('express')
const app = express()
const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use ('/places', require('./controllers/places'))


app.get ('/', function (req, res){
res.render('Home')
})


app.get ('*', function (req, res){
res.render('error404')
})

app.listen(process.env.PORT)
