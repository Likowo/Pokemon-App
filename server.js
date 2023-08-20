const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");  //NOTE: it must start with ./ if it's just a file, not an NPM package

// Configure the app (app.set) .i.e  set up our view engine and this must be done above our routes
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());


//First or Index Route (app.get)
app.get('/', (req,res) => {
  res.send('Welcome to the Pokemon App!')
})


/*/ Route (/pokemon) to display pokemon data as json in the browser (app.get)

// app.get('/pokemon', (req,res) => {
//   res.send(pokemon)
// })
    //*** Changing your /pokemon route to (res.render) your Index.jsx file */
// app.get('/pokemon',(req,res) => {
//   res.render('Index')
//   //  res.render("Index", { header:'See All The Pokemon' })
// });

// Let us update the index route(or pokemon route) to show all Pokemon in an unordered list

app.get('/pokemon',async (req,res) => {
//  const seeAllPokemon = await pokemon.find({})
   res.render('Index', {allPokemon:pokemon }); //pass props allPokemon from Index.js as (key) and variable seeAllPokemon as (value)
});

// Show route with /:id params i.e. Setting up your show route
app.get('/pokemon/:id', (req,res) => {
  res.send(req.params.id)
})









const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
});