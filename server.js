const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");  //NOTE: it must start with ./ if it's just a file, not an NPM package
const Pokedex = require("./models/Pokedex.js");

const mongoose = require('mongoose');
require("dotenv").config();
const methodOverride = require('method-override');


// Configure the app (app.set) .i.e  set up our view engine and this must be done above our routes
app.set("view engine", "jsx");

app.engine("jsx", require("express-react-views").createEngine());

//Mount Middleware (app.use)
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use((req, res, next) => {
  console.log('I run for all routes');
  next();
});

//Connect to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});


//First Route (app.get)
app.get('/', (req,res) => {
  res.send('Welcome to the Pokemon App!')
})

/*/ Route (/pokemon)or Index  to display pokemon data as json in the browser (app.get)

      // app.get('/pokemon', (req,res) => {
      //   res.send(pokemon)
      // })
//*** Changing your /pokemon route to (res.render) your Index.jsx file */
      // app.get('/pokemon',(req,res) => {
      //   res.render('Index')
      //   //  res.render("Index", { header:'See All The Pokemon' })
      // });

//***/ Let us update the index route(or pokemon route) to show all Pokemon in an unordered list
app.get('/pokemon',async (req,res) => {
 const seeAllPokemon = await Pokedex.find({})
   res.render('Index', {allPokemon:seeAllPokemon }); //pass props allPokemon from Index.js as (key) and variable seeAllPokemon as (value)
});

//Seed route
app.get('/addList',(req,res) =>{
  pokemon.map(async(newPoke)=> {
    await Pokedex.create(newPoke)
  })
  res.redirect('/pokemon')
})

// Delates all infor in DB
app.delete('/deleteall',async (req,res) => {
    await Pokedex.deleteMany({})
    res.redirect('/pokemon')
})

// Deletes specific document by id
app.delete('/delete/:id',async (req,res) => {
  await Pokedex.findByIdAndDelete(req.params.id)
  res.redirect('/pokemon')
})

// Loads Update.jsx
app.post('/update/:id',async (req,res) => {
  const currentPokemon = await Pokedex.findById(req.params.id)
  res.render('Update', {curPokemon:currentPokemon})
})

 ///Edit (Put/Update) route
app.put('/update/submit/:id',async (req,res) => {
  await Pokedex.findByIdAndUpdate(req.params.id,req.body)
  res.redirect('/pokemon')
})

// New Route to allow us create a new pokemon: Always put this route above your Show route,, so that the show route doesn't accidentally pick up a /pokemon/new request
    app.get('/pokemon/new', (req,res) => {
        res.render('New')
    });

//----{POST} request to /pokemon handler----->CREATE New Pokemon(app.post)
app.post('/pokemon/new',async (req,res) => {
  // console.log(req.body);
  await Pokedex.create(req.body);
 res.redirect('/pokemon');
});




// Show route with /:id params i.e. Setting up your show route
      // app.get('/pokemon/:id', (req,res) => {
      //   res.send(req.params.id)
      // })
//**Updating the Show route to render the show view with the pokemon data  */ /
app.get('/pokemon/:id', async(req,res) => {
  try{
  const onepokemon = await Pokedex.findById(req.params.id)
  res.render('Show',{allPokemon:onepokemon })
  }
  catch(err){
    res.send(err)
  }
})









const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
});