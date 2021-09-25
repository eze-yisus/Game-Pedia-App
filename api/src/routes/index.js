const { Router } = require('express');

const genres = require('./genres');
const addVideogames = require('./videogames');
const getVideogames = require('./videogames');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', genres);
router.use('/videogames', addVideogames);
router.use('/videogames', getVideogames);

module.exports = router;