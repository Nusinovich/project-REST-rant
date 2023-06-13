const mongoose = require('mongoose')
const {Schema} = mongoose

// Schema
const placeSchema = new Schema({
    name: {type: String, require: true},
    pic: {type: String, default: "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"},
    cuisines: {type: String, require: true},
    city: {type: String, default: "Anytown"},
    state: {type: String, default: "USA"},
    founded: Number
})


module.exports = mongoose.model('place', placeSchema)