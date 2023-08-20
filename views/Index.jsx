import React from 'react'


function Index(props) {
const pokemon = props.allPokemon;

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
                        
                        <div>
                            <h3>{ucFirst(poke.name)}</h3>
                            {/* <img src={poke.img} alt="" /> */}
                        </div>


                        


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