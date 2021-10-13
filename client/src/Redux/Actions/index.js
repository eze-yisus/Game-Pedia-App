import axios from 'axios';

export const GET_GAME_NAME = "GET_GAME_NAME";
export const GET_GAMES_ID = "GET_GAMES_ID";
export const GET_GENRES = "GET_GENRES";
export const GET_ALL_GAMES = "GET_ALL_GAMES";
export const CREATE_GAME = "CREATE_GAME";
export const ORDER_FILTER = "ORDER_FILTER";
export const GENRES_FILTER = "GENRES_FILTER";
export const GENRES_PLATFOR = "GENRES_PLATFOR";

export function getGameByName(name) {
    return async function (dispatch) {
        try {
            let info = await axios.get(`http://localhost:3001/videogames?name=${name}`);
            info = info.data;
            return dispatch({
                type: GET_GAME_NAME,
                payload: info,
            });
        } catch (error) {
            console.log('Error! ', error)
        }
    };
}

export function getGameById(id) {
    return async function (dispatch) {
        let info = await axios.get(`http://localhost:3001/videogame/${id}`);
        info = info.data;
        return dispatch({
            type: GET_GAMES_ID,
            payload: info,
        });
    };
}

export function getGenres() {
    return async function (dispatch) {
        let info = await axios.get('http://localhost:3001/genres');
        info = info.data;
        return dispatch({
            type: GET_GENRES,
            payload: info,
        });
    };
}

export function getAllGames() {
    return async function (dispatch) {
        let info = await axios.get('http://localhost:3001/videogames');
        info = info.data;
        return dispatch({
            type: GET_ALL_GAMES,
            payload: info,
        });
    };
}

export function createGame(data) {
    return async function (dispatch) {
        let info = await axios.post('http://localhost:3001/videogame/add', data);
        info = info.data;
        return dispatch({
            type: CREATE_GAME,
            payload: info,
        });
    };
}

export function orderFilter(type) {
    return async function (dispatch) {
        return dispatch({
            type: ORDER_FILTER,
            payload: type,
        });
    };
}

export function filterGenres(data) {
    return async function (dispatch) {
        return dispatch({
            type: GENRES_FILTER,
            payload: data,
        });
    };
}

export function filterPlatform(data) {
    return async function (dispatch) {
        return dispatch({
            type: GENRES_PLATFOR,
            payload: data,
        });
    };
}

