const { Router } = require('express');
const { getVideogameById } = require('../controllers/videogameController.js');

const router = Router();

router.get('/:idGame', getVideogameById);


module.exports = router;