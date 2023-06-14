const React = require('react')
const Def = require('../default')

function show (data) {
    return (
      <Def>
        <main>
          <div className='row'>
              <div className='col-sm-6'>
                <h1>{data.place.name}</h1>
                 <img src={data.place.pic} alt={data.place.name} />
                 <h3>Located in {data.place.city}, {data.place.state}</h3>
              </div>
          
              
              <div>
                <h2>Rating</h2>
                <p>currently unrated</p>
  
                <h2>Description</h2>
                <p>Located in {data.place.city}, {data.place.state}</p>
                <p>{data.place.name} was founded in {data.place.founded}</p>
                <p>Serving {data.place.cuisines}</p>
                <h2>Comments</h2>
                <p>No comments yet!</p>
              

             <div>
              <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
              Edit
              </a>  
              </div>   

              
              <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
                <button type="submit" className="btn btn-danger">
                Delete
                </button>
              </form>
              </div> 
          </div>  
        </main>

        </Def>
    )
}

module.exports = show
