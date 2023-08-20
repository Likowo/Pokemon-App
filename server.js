const express = require("express");
const app = express();
const pokemon = require("./models/pokemon");  //NOTE: it must start with ./ if it's just a file, not an NPM package

//First or Index Route (app.get)
app.get('/', (req,res) => {
  res.send('Welcome to the Pokemon App!')
})


// Route to display pokemon data as json in the browser

app.get('/pokemon', (req,res) => {
   res.send(pokemon)
})









const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
});