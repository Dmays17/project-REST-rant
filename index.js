const express= require('express')
const app = express()
require ('dotenv').config() 

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())

const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.render('home')
})
app.use('/places', require('./controllers/places'))


app.get('*',(req,res)=>{
    res.render('error404')
})
console.log(PORT)
app.listen(PORT)
