const mongoose = require('mongoose')
const { Schema } = mongoose

const newSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    author: { type: String, required: true },
    place: { type: String, required: true },
    date: { type: String, required: true },
    image: { type: String, required: true }
})

module.exports = mongoose.model('model', newSchema)