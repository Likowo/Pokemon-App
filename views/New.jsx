import React from 'react'

function New() {
  return (
    <div>
        <h1>Page to create a new pokemon</h1>
        {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
        <form action="/pokemon/new" method='POST'>
            Name: <input type="text" name='name' /> <br />
            Image: <input type="text" name='image' />
            {/* Image: <img src={pokemon.img} alt="" /> */}
            <input type="submit" name='' value="Create New Pokemon" />

        </form>
       
    </div>
  )
}

export default New