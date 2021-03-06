const { Genre } = require('../db');
const axios = require('axios');

const URL_GENRE = 'https://api.rawg.io/api/genres?key='
const API_KEY = 'cf4d79b38e5649e3b1b692405e877549'

async function preGenres() {
    try {
        let genres = (await axios.get(URL_GENRE + API_KEY)).data.results;

        genres = genres.map(e => {
            return {
                name: e.name,
            }
        });

        genres = await Promise.all(genres.map(e => Genre.findOrCreate({ where: e })));

        return 'Generos cargados exitosamente';

    } catch (error) {
        return error + ': No se han podido cargar los generos';
    }
}

async function getGenres(_req, res, next) {
    try {
        let genres = await Genre.findAll();
        res.json(genres);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    preGenres,
    getGenres
}