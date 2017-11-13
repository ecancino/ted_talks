const mongoose = require('mongoose')
const Talk = require('./talk')

mongoose.Promise = Promise
mongoose.connect('mongodb://localhost:27017/ted')

module.exports = {
  Talk
}
