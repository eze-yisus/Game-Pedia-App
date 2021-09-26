const { Videogame, Genre } = require('../db');
const { v4: uuidv4 } = require("uuid");
const { Op } = require('sequelize');
const axios = require('axios');
const validate = require('uuid-validate');

const URL_VIDEOGAMES = 'https://api.rawg.io/api/games?key=';
const URL_SEARCH = 'https://api.rawg.io/api/games?search=';
const URL_ID = 'https://api.rawg.io/api/games/';
const API_KEY = 'fca4af1a9c604ace98083f869dd4b9e2';

async function addVideogame(req, res, next) {
    const { name, description, released, rating, platforms, genres, image } = req.body;

    try {
        const newGame = await Videogame.create({
            id: uuidv4(),
            name: name,
            description: description,
            released: released,
            rating: rating,
            platforms: platforms,
            image: image,
        });

        await newGame.addGenres(genres);
        res.json(newGame);
    } catch (error) {
        next(error);
    }
}

async function getVideogames(req, res, next) {
    const { name } = req.query

    try {
        if (!name) {
            const gamesApi = await axios.get(
                `${URL_VIDEOGAMES}${API_KEY}`
            );
            const gamesApi2 = await axios.get(
                `${URL_VIDEOGAMES}${API_KEY}&page=2`
            );
            const gamesApi3 = await axios.get(
                `${URL_VIDEOGAMES}${API_KEY}&page=3`
            );
            const gamesApi4 = await axios.get(
                `${URL_VIDEOGAMES}${API_KEY}&page=4`
            );
            const gamesApi5 = await axios.get(
                `${URL_VIDEOGAMES}${API_KEY}&page=5`
            );
            const gamesDB = await Videogame.findAll({
                include: Genre,
            });
            let gamesApi100 = gamesApi.data.results.concat(gamesApi2.data.results, gamesApi3.data.results, gamesApi4.data.results, gamesApi5.data.results, gamesDB);

            let finalGames = gamesApi100.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    rating: e.rating,
                    platforms: e.platforms.map((p) => p.platform.name),
                    image: e.background_image ? e.background_image : e.image,
                    genres: e.genres.map((g) => g.name)
                }
            });
            res.json(finalGames);
        } else {
            const allGames = await axios.get(
                `${URL_SEARCH}${name}&key=${API_KEY}`
            );
            const allGamesData = allGames.data.results;

            const searchAllNames = allGamesData.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    rating: e.rating,
                    platforms: e.platforms.map((p) => p.platform.name),
                    image: e.background_image,
                    genres: e.genres.map((g) => g.name)
                }
            });
            const searchDBName = await Videogame.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    }
                },
                include: Genre,
            });
            const onlyDBName = searchDBName.map((e) => {
                return {
                    id: e.id,
                    name: e.name,
                    rating: e.rating,
                    platforms: e.platforms.map((p) => p.platform.name),
                    image: e.background_image,
                    genres: e.genres.map((g) => g.name)
                }
            });
            const allNames = onlyDBName.concat(searchAllNames);

            if (allNames.length > 0) {
                res.send(allNames);
            } else {
                res.send('No existe tal videojuego');
            }
        }
    } catch (error) {
        next(error);
    }
}

async function getVideogameById(req, res, next) {
    const { idGame } = req.params;
    
}

module.exports = {
    addVideogame,
    getVideogames,
    getVideogameById,
}