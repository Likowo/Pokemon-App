import React from "react";

function Show(props) {
    const pokemon = props.allPokemon;

    // Fxn to change the first letter of every name from small to capital letter.
const ucFirst = (x) => {
    let firstChar = x.charAt(0);
    let remaining = x.substring(1);
    return firstChar.toUpperCase() + remaining;
}

  return (
    <div className="seeAllPokemons">
      <h1>Gotta Catch 'Em All</h1>
      <ul>
        {pokemon.map((poke, i) => {
          return (
            <div key={i}>
              {/* Display Pokemon infor on a list: And Link your Index.jsx to your Show.jsx  using an <a> tag set dynamically with jsx i.e. with {} */}
              <li>
                 <h2>Name: {ucFirst(poke.name)}</h2>
                 <img src={poke.img + ".jpg"}  alt="Image of a Pokemon" /> 

                 <a href={`/pokemon`}>
                   <span>  👈BACK </span> 
                </a>
              </li >             
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Show;
