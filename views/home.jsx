const React=require('react')
const Def=require('./default')

function home(){
    return(
        <Def>
            <main>
                <h1>Home</h1>
                <div>
                    <img src="https://images.unsplash.com/photo-1490474504059-bf2db5ab2348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    alt='fruit cup'></img>
                    <div>
                        Photo by <a href='https://unsplash.com/@cravethebenefits'>Brenda Godinez</a> on
                        <a href='https://unsplash.com/photos/MsTOg6rhRVk'>Unsplash</a>
                    </div>
                </div>

                <a href='/places'>
                <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports= home