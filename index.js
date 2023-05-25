require('dotenv').config()

const express = require ('express')
app get ('/', function (req, res){
res.send('Welcome to Page 1!')
})

app get ('*', function (req, res){
    res.status(404).send('<h1>404 Error, page in not available</h1>')
})

app.listen(process.env.PORT)