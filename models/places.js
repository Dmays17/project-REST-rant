const mongoose=require('mongoose')
const placeSchema=new mongoose.Schema({
name:{type:String, require:true},
pic:String,
cuisines:{type:String, require:true},
city:{type:String, defaule:'Anytown'},
state:{type:String, defaule:'USA'},
founder:Number

})
module.exports=mongoose.model('Place',placeSchema)




// module.exports = [{
//     name: 'H-Thai-ML',
//     city: 'Seattle',
//     state: 'WA',
//     cuisines: 'Thai, Pan-Asian',
//     pic: '/images/pancakes.jpeg'
// }, {
//     name: 'Coding Cat Cafe',
//     city: 'Phoenix',
//     state: 'AZ',
//     cuisines: 'Coffee, Bakery',
//     pic: '/images/wings.jpeg'
// }]
