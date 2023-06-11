const express = require("express");
const router = express.Router();
const db = require('../models');

//INDEX ROUTE
router.get('/', (req, res) => {
  db.place.find()
  .then(places =>{
    res.render('places/index', {places})
  })
  .catch(err => {
    console.log(err)
    res.render('404: Wrong Page')
  })
})

//CREATE ROUTE
router.post('/', (req, res) => {
  db.place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log(err)
    res.render('404: (create) Wrong Page')
  })
})

//RENDER NEW PAGE ROUTE
router.get('/new', (req, res) => {
  res.render('places/new')
})

//SHOW NAME ROUTE
router.get('/:id', (req, res) => {
  db.place.findById(req.params.id)
  .then(place =>{
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log(err)
    res.render('404: (show) Wrong Page')
  })
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit from stub')
})

router.post('/:id/rant', (req, res) =>{
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) =>{
  res.send('GET /places/:id/rant/:rantId stub')
})




module.exports = router;