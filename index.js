const express= require('express')
const app = express()
require ('dotenv').config() 


const PORT=process.env.PORT
app.get('/',(req,res)=>{
    res.send('hello world')
})
app.use('/places', require('./controllers/places'))


app.get('*',(req,res)=>{
    res.send('<h1>Nice 404<h1>')
})
console.log(PORT)
app.listen(PORT)
