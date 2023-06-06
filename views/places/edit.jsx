const React = require('react')
const Def = require('../default.jsx')

function edit_form (data) {
    return (
        <Def>
        <main>
            <h1> Edit Place Information</h1>
            <form method='PUT' action={`/places/${data.place.id}?_method=PUT`}>
                <div className='form-group'>
                    <label htmlFor='name' > Business Name</label><br></br>
                    <input className='form-control' id='name' name='name' value={data.place.name} required></input>
                </div><br></br>
                <div className='form-group'>
                    <label htmlFor='pic'>Place Business Picture</label><br></br>
                    <input className='form-control' type='url' id='pic' name='pic' value={data.place.pic}></input>
                </div><br></br>
                <div className='form-group'>
                    <label htmlFor='city'>City</label><br></br>
                    <input className='form-control' id='city' name='city' value={data.place.city}></input>
                </div><br></br>
                <div className='form-group'>
                    <label htmlFor='state'>State</label><br></br>
                    <input className='form-control' id='state' name='state' value={data.place.state}></input>
                </div><br></br>
                <div className='form-group'>
                    <label htmlFor='cuisines'>Cuisines</label><br></br>
                    <input className='form-control' id='cuisines' name='cuisines' value={data.place.cuisines} required></input>
                </div><br></br>
                <input className='btn btn-primary' type='submit' value='Edit Information'></input>
            </form>
        </main>
    </Def>
    )
}

module.exports = edit_form
