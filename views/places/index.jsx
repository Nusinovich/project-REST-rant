const React = require('react')


function index (data) {
    let placesFormatted = data.places.map((place)=>{
        return (
            <div className="col-sm-6">
            <h2>{place.name}</h2>
            <p className="text-center">
              {place.cuisines}
            </p>
            <img src={place.pic} alt={place.name} />
            <p className="text-center">
              Located in {place.city}, {place.state}
            </p>
          </div>
        )
    })
   return(
    <def>
        <main>
            <h1>Places index page</h1>
            <div className='row'>

            </div>
            {placesFormatted}
        </main>
    </def>
   )
}

module.exports = index

