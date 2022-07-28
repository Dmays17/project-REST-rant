
const router = require('express').Router()
const places= require('../models/places.js')


router.get('/', (req, res) => {
    
      res.render('places/index',{places})
  })

  router.get('/new',(req,res)=>{
    res.render('places/new')
  })

  router.post('/',(req,res)=>{
    console.log(req.body)
    if(!req.body.pic){
        req.body.pic='http://placekitten.com/400/400'
    }
    if(!req.body.pic){
        req.body.city='anytown'
    }
    if(!req.body.state){
        req.body.state='USA'
    }
    places.push(req.body)
    console.log(places)
    res.redirect('/places')
  })
  

  

module.exports=router