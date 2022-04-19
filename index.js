import express from "express";
import  path  from "path";
const server = express();
const __dirname = path.resolve(path.dirname(""));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, 'public')))

const pokedex = [
    {   
        id: 1,
        nome: "Bulbasaur",
        description: 'There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.',
        category: 'Seed',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png' 
    },
    {
        id: 2,
        nome: 'Charmander',
        description: 'It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.',
        category: 'Lizard',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png'
    },
    {
        id: 3,
        nome: 'Squirtle',
        description: 'When it retracts its long neck into its shell, it squirts out water with vigorous force.',
        category: 'Tiny Turtle',
        image: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png'
    }
]



server.get("/", (req, res) => {
  res.render('index', {pokedex});
});

server.listen(3000, () =>
  console.log("Servidor rodando em http://localhost:3000")
);
