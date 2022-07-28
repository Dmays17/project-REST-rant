
const router = require('express').Router()
const places= require('../models/places.js')


router.get('/', (req, res) => {
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: '/images/pancakes.jpeg'
      }, {
          name: 'Coding Cat Cafe',
          city: 'Phoenix',
          state: 'AZ',
          cuisines: 'Coffee, Bakery',
          pic: '/images/wings.jpeg'
      }]
      res.render('places/index',{places})
  })

  router.get('/new',(req,res)=>{
    res.render('places/new')
  })

  router.post('/',(req,res)=>{
    
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
    res.redirect('/places')
  })
  

  

module.exports=router