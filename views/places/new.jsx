const React = require('react')
const Def= require('../default')

function new_form(){
return (
<Def>
    <main>
        <h1>Add a New Place</h1>
        <form method="POST" action="/places">
  <div className='form-control'>
    <label htmlFor="name">Place Name</label>
    <input className='form-control' id="name" name="name" />
  </div>
  <div className='form-control'>
    <label htmlFor="pic">Place Picture</label>
    <input className='form-control' type="url" id="pic" name="pic" />
  </div>
  <div className='form-control'>
    <label htmlFor="city">City</label>
    <input className='form-control' id="city" name="city" />
  </div>
  <div className='form-control'>
    <label htmlFor="state">State</label>
    <input className='form-control' id="state" name="state" />
  </div>
  <div className='form-control'>
    <label htmlFor="cuisines">Cuisines</label>
    <input className='form-control' id="cuisines" name="cuisines" />
  </div>
  <div className='form-control'>
    <label for="founded">Founded Year</label>
    <input 
    type="number"
    className='form-control' 
    id="founded" 
    name='founded'
    value={new Date().getFullYear()}
    />
  </div>
  <input className='btn btn-primary' type="submit" value="Add Place" />
</form>

    </main>
</Def>
)
}

module.exports=new_form