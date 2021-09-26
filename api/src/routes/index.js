const { Router } = require('express');

const genres = require('./genres');
const videogameRoutes = require('./videogames');
const getVideogames = require('./videogames');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/genres', genres);
router.use('/videogame', videogameRoutes);
router.use('/videogames', getVideogames);

module.exports = router;