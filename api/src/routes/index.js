const { Router } = require('express');

const genres = require('./genres');
const addVideogame = require('./videogames');
const getVideogames = require('./videogames');
const idVideogame = require('./videogameUnique');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', genres);
router.use('/videogame', addVideogame);
router.use('/videogame', idVideogame);
router.use('/videogames', getVideogames);

module.exports = router;