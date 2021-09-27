const { Router } = require('express');
const { addVideogame, getVideogames } = require('../controllers/videogamesController.js');

const router = Router();

router.post('/add', addVideogame);

router.get('/', getVideogames);


module.exports = router;