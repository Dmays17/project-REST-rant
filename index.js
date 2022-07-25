const express= require('express')
const app = express()
require ('dotenv').config() 

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.render('home')
})
//app.use('/places', require('./controllers/places'))
app.get('/',(req,res)=>{
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
      
    res.render('places/index',{places})
})


app.get('*',(req,res)=>{
    res.render('error404')
})
console.log(PORT)
app.listen(PORT)
