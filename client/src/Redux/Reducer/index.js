import { GET_GAME_NAME, GET_GAMES_ID, GET_GENRES, GET_ALL_GAMES, CREATE_GAME } from "../Actions/index.js";

const initialState = {
    genres: [],
    videogame: [],
    videogames: [],
    createVideogame: [],
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_GAME_NAME:
            return {
                ...state,
                videogames: action.payload,
            };
        case GET_GAMES_ID:
            return {
                ...state,
                videogame: action.payload,
            };
        case GET_GENRES:
            return {
                ...state,
                genres: action.payload,
            };
        case GET_ALL_GAMES:
            return {
                ...state,
                videogames: action.payload,
            };
        case CREATE_GAME:
            return {
                ...state,
                createVideogame: action.payload,
            };
        default:
            return state;
    };
}