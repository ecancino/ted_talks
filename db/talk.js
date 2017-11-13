const mongoose = require('mongoose')

const Talk = new mongoose.Schema({
  _id: mongoose.Schema.ObjectId,
  title: String,
  description: String,
  duration: Number,
  speaker: String,
  speaker_occupation: String,
  'event': String,
  filmed: Number,
  published: Number,
  url: String,
  tags: [String]
})

module.exports = mongoose.model('talk', Talk)
