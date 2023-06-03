const React = require('react')


function index (data) {
    let placesFormatted = data.places.map((place)=>{
        return (
           <div>
            <h2>{place.name}</h2>
            <img src={place.pic} alt={place.name}></img>
           </div>
        )
    })
   return(
    <def>
        <main>
            <h1>Places index page</h1>
            {placesFormatted}
        </main>
    </def>
   )
}

module.exports = index

