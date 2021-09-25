const { Router } = require('express');
const { addVideogame, getVideogames } = require('../controllers/videogameController.js');

const router = Router();

router.post('/add', addVideogame);

router.get('/', getVideogames);

module.exports = router;