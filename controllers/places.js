const express = require("express");
const router = express.Router();
const db = require('../models');
const comment = require("../models/comment");

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
  .populate('comments')
  .then(place =>{
    console.log(place.comments)
    res.render('places/show', {place})
  })
  .catch(err => {
    console.log(err)
    res.render('404: (show) Wrong Page')
  })
})

//Edit Route
router.get('/:id/edit', (req, res) => {
  db.place.findById(req.params.id)
  .then(place => {
      res.render('places/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  db.place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/places/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})



//Delete Route
router.delete('/:id', (req, res) => {
  db.place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.post('/:id/rant', (req, res) =>{
  res.send('GET /places/:id/rant stub')
})


router.post('/:id/comment', (req, res) => {
  console.log(req.body)
  db.place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/places/${req.params.id}`)
          })
      })
      .catch(err => {
          console.log('err', err)
          res.render('error404')
      })
  })
})
 





module.exports = router;

