const express = require ('express')
app get ('/', function (req, res){
res.send('Welcome to Page 1!')
})

app.listen(3000, function(){
    console.log('Server is up and running!')
})