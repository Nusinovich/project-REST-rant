const React = require('react')
const Def = require('./default')

function error404 () {
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <p>Oops, sorry, we can't find this page!</p>
            </main>
            <div>
                <img src='/images/error404.jpg' alt='Picture of sad robot'></img>
                <div>
                Photo by <a href="https://unsplash.com/@mullyadii?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mulyadi</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
        </Def>
    )
}

module.exports = error404