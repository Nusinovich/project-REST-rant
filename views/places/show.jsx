const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
          </main>
          <div>
          <img src={data.place.pic} alt={data.place.name} />
          </div>
          <section>
            <h2>Rating</h2>
            <p>currently unrated</p>
          </section>
          <section>
            <h2>Description</h2>
            <p>Located in {data.place.city}, {data.place.state}</p>
            <p>{data.place.name} was founded in {data.place.founded}</p>
            
          </section>
          <section>
            <h2>Comments</h2>
            <p>No comments yet!</p>
          </section>

          <a href={`/places/${data.id}/edit`} className="btn btn-warning"> 
          Edit
          </a>     

          <form method="POST" action={`/places/${data.id}?_method=DELETE`}> 
            <button type="submit" className="btn btn-danger">
            Delete
            </button>
          </form> 
   

        </Def>
    )
}

module.exports = show
