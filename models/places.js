const mongoose = require('mongoose')
const comment = require('./comment')
const {Schema} = mongoose

// Schema
const placeSchema = new Schema({
    name: {type: String, require: true},
    pic: {type: String, default: "https://cdn.vectorstock.com/i/preview-1x/82/99/no-image-available-like-missing-picture-vector-43938299.jpg"},
    cuisines: {type: String, require: true},
    city: {type: String, default: "Anytown"},
    state: {type: String, default: "USA"},
    founded: {type: Number,
        min: [1673, 'Really? that old?!'],
        max: [new Date().getFullYear(), 'Hey, this year is in the future!']
    },
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
})

placeSchema.method.showEstablished = function(){
    return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}`
}


module.exports = mongoose.model('place', placeSchema)