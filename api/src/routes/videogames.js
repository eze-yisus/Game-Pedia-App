const { Router } = require('express');
const { addVideogame, getVideogames, getVideogameById } = require('../controllers/videogameController.js');

const router = Router();

router.post('/add', addVideogame);

router.get('/', getVideogames);

router.get('/:id', getVideogameById);

module.exports = router;