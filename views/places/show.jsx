const React= require('react')
const Def= require('../default')

function show(data){
    return(
        <Def>        
            <main>
             
                <img src={data.place.pic}></img>
                <h1>{data.place.name}</h1>
                <h2>Rating</h2>
                <h4>Not rated</h4>
                <h2>Description </h2>
                <h4>located in {data.place.city}, {data.place.state} and servering {data.place.cuisines}</h4>
            </main>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'>Edit</a>
            
            <form method='POST'action={`/places/${data.id}?_method=DELETE`}>
                <button type='submit' className='btn btn-danger'>
                    Delete
                    </button>
            </form>
        </Def>

    )
}

module.exports=show