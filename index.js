const express= require('express')
const app = express()
require ('dotenv').config() 

app.set('view engine','jsx')
app.engine('jsx',require('express-react-views').createEngine())
app.use(express.static('public'))
const PORT=process.env.PORT
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.render('home')
})

app.use('/places',require('./controllers/places'))


app.get('*',(req,res)=>{
    res.render('error404') 
})

app.listen(PORT)
