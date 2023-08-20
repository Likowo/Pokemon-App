const express = require("express");
const app = express();


//First or Index Route (app.get)
app.get('/', (req,res) => {
  res.send('Welcome to the Pokemon App!')
})











const PORT = 3000
app.listen(PORT, () =>{
    console.log(`Server running on ${PORT}`)
});