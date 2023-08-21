import React from "react";

function Show(props) {
  const pokemon1 = props.allPokemon;

  // Fxn to change the first letter of every name from small to capital letter.
  const ucFirst = (x) => {
    let firstChar = x.charAt(0);
    let remaining = x.substring(1);
    return firstChar.toUpperCase() + remaining;
  };

  return (
    <div className="seeAllPokemons">
      <link rel="stylesheet" type="text/css" href="/css/style.css" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      <h1>Gotta Catch 'Em All</h1>

      <h2>Name: {pokemon1.name?ucFirst(pokemon1.name):""}</h2>
      <img src={pokemon1.img + ".jpg"} alt="Image of a Pokemon" />

      <form
        className="formButtons"
        action={`/update/${pokemon1.id}`}
        method="POST"
      >
        <input className='inputSubmit' type="submit" name="" value="Update Pokemon" />
      </form>
      <form
        className="formButtons"
       action={ `/delete/${pokemon1.id}?_method=DELETE`        
        }
        method="POST"
      >
        <div className="menuItem">
          <button type="submit" className="menuLink">
            Delete
          </button>{" "}
        </div>
      </form>
      <a href={`/pokemon`}>
        <span> 👈BACK </span>
      </a>
    </div>
  );
}

export default Show;

//////////////////
{
  /* <ul>
        {pokemon.map((poke, i) => {
          return (
            <div key={i}>
              {/* Display Pokemon infor on a list: And Link your Index.jsx to your Show.jsx  using an <a> tag set dynamically with jsx i.e. with {} */
}
// <li>*/}
//         </li >
//       </div>
//     );
//   })}
// </ul>
