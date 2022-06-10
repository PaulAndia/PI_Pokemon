const { Router } = require('express');
// Importar todos los routers;
const typesRouter = require('./getTypes');
const pokemonsRouter = require('./getPokemons');
const postRouter = require('./postPokemon');

const router = Router();

// Configurar los routers
router.use('/types', typesRouter);
router.use('/pokemons', pokemonsRouter);
router.use('/pokemon', postRouter);


module.exports = router;