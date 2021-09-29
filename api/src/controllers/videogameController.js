const { Videogame, Genre } = require('../db');
const axios = require('axios');
const validate = require('uuid-validate');

const URL_ID = 'https://api.rawg.io/api/games/';
const API_KEY = 'fca4af1a9c604ace98083f869dd4b9e2';


async function getVideogameById(req, res, next) {
    const { idGame } = req.params;
    // console.log('1 estoy?')
    try {

        if (!isNaN(idGame)) {
            // console.log('2 estoy aca???')
            var idKey = parseInt(idGame)

            const { data } = await axios.get(`${URL_ID}${idKey}?key=${API_KEY}`);
            // console.log('3 estoy acaaaa')
            if (data.id) {
                // console.log('4 estoy acá')
                let gameApi = {
                    id: data.id,
                    name: data.name,
                    description: data.description,
                    released: data.released,
                    image: data.background_image,
                    rating: data.rating,
                    genres: data.genres.map(g => g.name),
                    platforms: data.platforms.map(p => p.platform.name),
                };

                return res.json(gameApi);
            }

        } else if (validate(idGame)) {
            const gameDB = await Videogame.findByPk(idGame, {
                include: [
                    {
                        model: Genre,
                        attributes: ['name'],
                        through: {
                            attributes: []
                        }
                    }
                ],
            });
            // console.log('5 que tal poc acá?')

            return res.json(gameDB);
        }
    } catch (error) {
        next(error);
    }
}

module.exports = {
    getVideogameById,
}