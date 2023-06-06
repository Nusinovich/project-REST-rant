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
            
          </section>
          <section>
            <h2>Comments</h2>
            <p>No comments yet!</p>
          </section>
        </Def>
    )
}

module.exports = show
