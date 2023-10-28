import React from 'react'

function Update(props) {
    const pokemon = props.curPokemon;
  return (
    <div>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <h1>Page to Update pokemon information </h1>
        {/* NOTE: action will be the route, method will be the HTTP Method. NB: HTTP verb is Create, while HTTP method is POST */}
        <form action={`/update/submit/${pokemon.id}?_method=PUT`} method='POST'>
            Name: <input type="text" name='name' defaultValue={pokemon.name} /> <br />
            Image: <input type="text" name='img' defaultValue={pokemon.img} /> <br />    
            {/* Image: <img src={poke.img} alt="" /> */}
            <input type="submit" name='' value="Update pokemon information" />
        </form>
        
        <a href={`/pokemon`}>
        <span> 👈BACK </span>
      </a>
       
    </div>
  )
}

export default Update   