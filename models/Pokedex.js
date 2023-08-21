const mongoose = require('mongoose');

const pokemonSchema = new mongoose.Schema({
    name:  { type: String, required: true },
    img:    {type:String,required: true}
});

const Pokedex = mongoose.model('Pokedex',pokemonSchema);

module.exports = Pokedex;