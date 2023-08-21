import React from 'react'

function New() {
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <h1>Page to create a new pokemon</h1>
        {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
        <form action="/pokemon/new" method='POST'>
            Name: <input type="text" name='name' /> <br />
            Image: <input type="text" name='img' /> <br />    
            {/* Image: <img src={poke.img} alt="" /> */}
            <input type="submit" name='' value="Create New Pokemon" />
        </form>
        {/* NB: After creating form , Now go to server.js and create a POST request to /pokemon.
         Why?? Since the form  tells the browser to create a POST request to /pokemon, we'll need to set up a route handler for this kind of request*/}
       
    </div>
  )
}

export default New;