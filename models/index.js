require('dotenv').config()
const mongoose = require('mongoose')
// tryed using process.env.MONGO_URI but it didnt work.
mongoose.connect("mongodb://localhost:27017/rest-rant", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
