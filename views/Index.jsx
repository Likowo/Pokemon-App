import React from "react";

function Index(props) {
  const pokemon = props.allPokemon;

  // Fxn to change the first letter of every name from small to capital letter.
  const ucFirst = (x) => {
    let firstChar = x.charAt(0);
    let remaining = x.substring(1);
    return firstChar.toUpperCase() + remaining;
  };

  return (
    <div className="seeAllPokemonsWrapper">
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

      <h1>See All The Pokemon!!</h1>
      <nav>
        <a href="/pokemon/new">Create a New Pokemon</a>
    </nav>
      
      <a href="/addList"> Add to List of Pokemon - Reloads Created List of Pokemon</a>
      <form action="/deleteall?_method=DELETE"
      method="POST"> 
        <input type="submit"  name="" value="Delete All Pokemon"  />
      </form>
      <h2> List of Pokemons (Click to See Pokemon)</h2>
      <ul>
        {pokemon.map((poke, i) => {
          return (
            <div key={i}>
              {/* Display Pokemon infor on a list: And Link your Index.jsx to your Show.jsx  using an <a> tag set dynamically with jsx i.e. with {} */}
              <li>
                <a href={`/pokemon/${poke.id}`}>
                  <h3>{ucFirst(poke.name)}</h3>
                </a>
              </li>
              {/* Now copy All the above code and paste in the Show.jsx. Change information in the <h> tags as directed */}
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default Index;
