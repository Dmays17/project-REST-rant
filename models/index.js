require('dotenv').config()
const mongoose = require('mongoose')
// tryed using process.env.MONGO_URI but it didnt work.
mongoose.connect("mongodb+srv://dmays17:DDDm2max@cluster0.jvh7lz4.mongodb.net/rest-rant", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')
module.exports.Comment = require('./comment')
