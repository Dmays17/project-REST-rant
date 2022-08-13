const router = require('express').Router()
const db=require('../models')

// future update note: lets they to make async and await insted of .then
router.get('/', (req, res) => {
  db.Place.find()
  .then((places)=>{
    res.render('places/index',{places})
  })
  .catch(err=>{
    console.log('err',err)
    res.render('error404')
  })
})

router.post('/', (req, res) => {
  
 db.Place.create(req.body)
 .then(()=>{
  res.redirect('/places')
 })
 .catch(err=>{
  if (err && err.name == 'ValidationError'){
    let message ='Vailidation Error:'
    for(var field in err.errors){
      message += `${field} was ${err.errors[field].value}. `
      message += `${err.errors[field].message}`
    }
    console.log('Vailidation error message',message)
    res.render('places/new',{message})
  }else{
  res.render('error404')
  }
})
})

router.get('/new', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place =>{
    res.render('places/new',{place})
  })
  .catch(err=>{
    console.log('err',err)
    res.render('error404')
  })
})


router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
  .then(place =>{
  console.log(place.comments)
    res.render('places/show',{place})
  })
  .catch(err=>{
    console.log('err',err)
    res.render('error404')
  })
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

router.post('/:id/comment',(req,res)=>{
  console.log(req.body)
  req.body.rant=req.body.rant ? true : false
  db.Place.findById(req.params.id)
    .then(place =>{
      db.Comment.create(req.body)
      .then(comment => {
        place.comments.push(comment.id)
        place.save()
        .then(()=>{
          res.redirect(`/places/${req.params.id}`)
        })
        .catch(err =>{
          res.render('error404')
        })
      })
      .catch(err =>{
        res.render('error404')
      })
    })
    .catch(err => {
      res.render('error404')
    })
})

module.exports = router


// router.get('/', (req, res) => {
    
//       res.render('places/index',{places})
//   })

//   router.get('/new',(req,res)=>{
//     res.render('places/new')
//   })

//   router.post('/',(req,res)=>{
//     console.log(req.body)
//     if(!req.body.pic){
//         req.body.pic='http://placekitten.com/400/400'
//     }
//     if(!req.body.pic){
//         req.body.city='anytown'
//     }
//     if(!req.body.state){
//         req.body.state='USA'
//     }
//     places.push(req.body)
//     console.log(places)
//     res.redirect('/places')
//   })

//   router.get('/:id',(req,res)=>{
//     let id=Number(req.params.id)
//     if (isNaN(id)){
//       res.render('error404')
//     }else if(!places[id]){
//       res.render('error404')
//     }
//     else{
//       res.render('places/show',{place:places[id],id})
//     } 
//   })

//   router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//         res.render('error404')
//     }
//     else if (!places[id]) {
//         res.render('error404')
//     }
//     else {
//       res.render('places/edit', { place: places[id] })
//     }
//   })
//   router.put('/:id',(req,res)=>{
//     let id = Number(req.params.id)
//     if(isNaN(id)){
//       console.log(id)
//       res.render('error404')
//     }
//     else if(!places[id]){
//       res.render('error404')
//     }
//     else{
      
//     if(!req.body.pic){
//         req.body.pic='http://placekitten.com/400/400'
//     }
//     if(!req.body.city){
//         req.body.city='anytown'
//     }
//     if(!req.body.state){
//         req.body.state='USA'
//     }
//  places[id]=req.body
//  res.redirect(`/places/${id}`)
//     }
//   })
  
//   router.delete('/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id,1)
//       res.redirect('/places')
//     }
//   })