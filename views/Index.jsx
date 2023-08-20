import React from 'react'


function Index(props) {
const pokemon = props.allPokemon;

// Fxn to change the first letter of every name from small to capital letter.
const ucFirst = (x) => {
    let firstChar = x.charAt(0);
    let remaining = x.substring(1);
    return firstChar.toUpperCase() + remaining;
}
   
  return (
    <div className='seeAllPokemons' >
        <h1>See All The Pokemon!!</h1>
         <h2>Pokemon information</h2>
        <ul>
            {pokemon.map((poke, i) => {
                return (
                    <div key={i} >
                        {/* Display Pokemon infor on a list */}
                        <li>
                        <a href={`/pokemon/${i}`}>
                            <h3>{ucFirst(poke.name)}</h3>
                            </a>
                        </li>
                        
                            
                            
                            {/* <img src={poke.img} alt="" /> */}
                       


                        


                    </div>
                    
                )
            })

            }
        </ul>


    </div>

  )

// const myStyle = {
    //     color: '#ffffff',
    //     backgroundColor: '#000000',
    //     };
        
        // class MyFirstComponent extends React.Component() {
        // return (
        //   <div  style={myStyle}>
        //   <h3>My First React Component!</h3>
        //   </div >
        // )
        // };

}

export default Index