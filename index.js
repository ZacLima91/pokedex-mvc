import express from "express";
import path from "path";
const PORT = process.env.PORT || 3000;
const server = express();
const __dirname = path.resolve(path.dirname(""));
server.set("view engine", "ejs");
server.use(express.static(path.join(__dirname, "public")));
server.use(express.urlencoded());
const pokedex = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass, Posion",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    description:
      "Há uma semente de planta nas costas desde o dia em que este Pokémon nasce. A semente cresce lentamente.",
    height: 0.7,
    weigth: 6.9,
    category: "Semente",
    Abilities: "Superar",
  },
  {
    id: 2,
    name: "Charmander",
    type: "Fire",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
    description:
      "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda.",
    height: 0.6,
    weigth: 8.5,
    category: "Largato",
    Abilities: "Chama",
  },
  {
    id: 3,
    name: "Squirtle",
    type: "Water",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
    description:
      "Quando retrai seu longo pescoço em sua concha, esguicha água com força vigorosa.",
    height: 0.6,
    weigth: 8.5,
    category: "Tartatuga pequena",
    Abilities: "Torrent",
  },
  {
    id: 4,
    name: "Caterpie",
    type: "Bug",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png",
    description:
      "Para proteção, ele libera um cheiro horrível da antena em sua cabeça para afastar os inimigos.",
    height: 0.3,
    weigth: 2.9,
    category: "Minhoca",
    Abilities: "Pó de escudo",
  },
 
];

server.get("/", (req, res) => {
  res.render("index", { pokedex });
});

server.get("/index.ejs", (req, res) => {
  res.render("index.ejs", { pokedex });
});
server.get("/cadastro.ejs", (req, res) => {
  res.render("cadastro.ejs");
});

server.get("/history.ejs", (req, res) => {
  res.render("history.ejs");
});

server.get("/detalhes/:id", (req, res) => {
  let pokemon = [];
  pokedex.filter((element) => {
    if (element.id == req.params.id) {
      pokemon = element;
    }
  });
  console.log(pokemon);
  res.render("detalhes", { pokemon });
});

server.post("/add", (req, res) => {
  const i = pokedex[pokedex.length - 1].id + 1;
  const {
    name,
    type,
    image,
    description,
    height,
    weigth,
    category,
    Abilities,
  } = req.body;
  pokedex.push({
    id: i,
    name,
    type,
    image,
    description,
    height,
    weigth,
    category,
    Abilities,
  });
  res.redirect("/");
  console.log(pokedex);
});
server.listen(PORT, () =>
  console.log(`Servidor rodando em http://localhost:${PORT}`)
);
