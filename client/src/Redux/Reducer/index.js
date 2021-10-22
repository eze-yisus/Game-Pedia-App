import { GET_GAME_NAME, GET_GAMES_ID, GET_GENRES, GET_ALL_GAMES, CREATE_GAME, ORDER_FILTER, GENRES_FILTER, GENRES_PLATFOR } from "../Actions/index.js";

const initialState = {
    genres: [],
    videogame: [],
    videogames: [],
    createVideogame: [],
    filteredGames: [],
    orderedBy: 'ALL',
    filteredBy: 'ALL',
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
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
        case CREATE_GAME:
            return {
                ...state,
                createVideogame: action.payload,
            };
        case GET_GAME_NAME:
            return {
                ...state,
                videogames: action.payload,
                filteredGames: action.payload,
            };
        case GET_ALL_GAMES:
            return {
                ...state,
                videogames: action.payload,
                filteredGames: action.payload,
            };
        case GENRES_FILTER:
            if (action.payload === 'ALL') {
                return {
                    ...state,
                    filteredGames: state.videogames,
                    filteredBy: action.payload,
                };
            } else {
                return {
                    ...state,
                    filteredGames: state.videogames.filter((f) => 
                        f.genres.includes(action.payload)
                    ),
                    filteredBy: action.payload,
                };
            };
        case ORDER_FILTER:
            switch (action.payload) {
                case 'A-Z':
                    return {
                        ...state,
                        filteredGames: [...state.filteredGames].sort((a, b) => 
                            a.name > b.name ? 1 : b.name > a.name ? -1 : 0
                        ),
                        orderedBy: action.payload,
                    };
                case 'Z-A':
                    return {
                        ...state,
                        filteredGames: [...state.filteredGames].sort((a, b) => 
                            a.name < b.name ? 1 : b.name < a.name ? -1 : 0
                        ),
                        orderedBy: action.payload,
                    };
                case 'ASC':
                    return {
                        ...state,
                        filteredGames: [...state.filteredGames].sort((a, b) => 
                            a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
                        ),
                        orderedBy: action.payload,
                    };
                case 'DES':
                    return {
                        ...state,
                        filteredGames: [...state.filteredGames].sort((a, b) => 
                            a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
                        ),
                        orderedBy: action.payload,
                    };
                case 'API':
                    return {
                        ...state,
                        filteredGames: [...state.videogames].filter((f) => 
                            typeof f.id === 'number'
                        ),
                        orderedBy: action.payload,
                    };
                case 'DB':
                    return {
                        ...state,
                        filteredGames: [...state.videogames].filter((f) => 
                            typeof f.id !== 'number'
                        ),
                        orderedBy: action.payload,
                    };
                case 'ALL':
                    return {
                        ...state,
                        filteredGames: state.videogames,
                        orderedBy: action.payload,
                    };
                default:
                    return state.videogames;
            };
        default:
            return state;
    };
}