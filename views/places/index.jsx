const React = require('react')
const Def = require('../default')


function index (data) {
    let placesFormatted = data.places.map((place)=>{
        return (
           <Def>
            <div className='col-sm-6'>
              <h2>{place.name}</h2>
              <p className='text-center'></p>
              <img src={place.pic} alt={place.name} />
              <p className='text-center'> Located in {place.city}, {place.state}</p>
            </div>
          </Def>
        )
    })
   return(
    <Def>
        <main>
            <h1>Places to Rant or Rave About</h1>
            <div className='row'>
            {placesFormatted}
            </div>
        </main>
    </Def>
   )
}

module.exports = index

