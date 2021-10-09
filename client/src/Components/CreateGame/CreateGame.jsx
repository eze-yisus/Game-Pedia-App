import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, createGame } from "../../Redux/Actions/index.js";
import { useHistory } from "react-router";
import './CreateGame.css';

export default function CreateGame() {

    const platformsRandom = [
        { name: "PC" },
        { name: "PlayStation 1" },
        { name: "PlayStation 2" },
        { name: "PlayStation 3" },
        { name: "PlayStation 4" },
        { name: "PlayStation 5" },
        { name: "XBox 360" },
        { name: "XBox One" },
        { name: "XBox Series X" },
        { name: "Nintendo" },
        { name: "Wii" },
        { name: "Web" },
        { name: "Sega" },
    ];

    const dispatch = useDispatch();
    const history = useHistory();
    const genres = useSelector((state) => state.genres)

    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        image: '',
        platforms: [],
        genres: [],
    });

    useEffect(() => {
        dispatch(getGenres());
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        });
    };

    const handleGenresAndPlat = (e) => {

        if (e.target.name === 'genres') {
            setInput({
                ...input,
                genres: [...input.genres, e.target.value],
            });
        } else if (e.target.name === 'platforms') {
            setInput({
                ...input,
                platforms: [...input.platforms, e.target.value],
            });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createGame(input));
        alert('Game loaded successfully');
        setInput({
            name: '',
            description: '',
            released: '',
            rating: '',
            image: '',
            platforms: [],
            genres: [],
        })
        history.push('/videogames');
    };

    return (
        <div className='fondito'>
            <Link to='/videogames'>
                <button className='botonGo'>Go back</button>
            </Link>
            <Link to='/'>
                <button className='botHome'>Go home</button>
            </Link>
            <div className='addOwn'>
                <h3 className='addOwnTitle'>Add your own game</h3>
            </div>
            <div className='divImage'>
                <div className='encacillacion'>
                    <form onSubmit={handleSubmit}>
                        <div className='nameC'>
                            <label className='nameCTitle'>Name</label>
                            <input className='nameCInput'
                                placeholder='Name of the game . . .'
                                type='text'
                                name='name'
                                onChange={handleChange}
                                value={input.name}
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className='descrC'>
                            <label className='descrCTitle'>Description</label>
                            <textarea className='descrCInput'
                                placeholder='Description of the game . . .'
                                name='description'
                                onChange={handleChange}
                                value={input.description}
                                autoComplete='off'
                                required
                            />
                        </div>
                        <div className='relaC'>
                            <label className='relaCTitle'>Released</label>
                            <input className='relaCInput'
                                type='date'
                                name='released'
                                onChange={handleChange}
                                value={input.released}
                                autoComplete='off'
                            />
                        </div>
                        <div className='imageC'>
                            <label className='imageCTitle'>Image</label>
                            <input className='imageCInput'
                                placeholder='Add an image URL for your game . . .'
                                type='text'
                                name='image'
                                onChange={handleChange}
                                value={input.image}
                                autoComplete='off'
                                required
                            />
                            <h5 className='imageExtra'>If you don't have a image URL, use this:</h5>
                            <h6 className='imageExtra2'>https://avatars.githubusercontent.com/u/57154655?s=200&v=4</h6>
                        </div>
                        <div className='ratingC'>
                            <label className='ratingCTitle'>Rating</label>
                            <input className='ratingCInput'
                                placeholder='(1 - 10)'
                                type='number'
                                min='0'
                                max='10'
                                name='rating'
                                onChange={handleChange}
                                value={input.rating}
                                autoComplete='off'
                            />
                        </div>
                        <div className='platC'>
                            <label className='platCTitle'>Platforms</label>
                            <div>
                                <select className='platCSelect'
                                    name='platforms'
                                    multiple='multiple'
                                    onChange={handleGenresAndPlat}
                                    required
                                >
                                    {platformsRandom.map((p, i) => {
                                        return <option key={i} value={p.name}>{p.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='genresC'>
                            <label className='genresCTitle'>Genres</label>
                            <div>
                                <select className='genresCSelect'
                                    name='genres'
                                    multiple='multiple'
                                    onChange={handleGenresAndPlat}
                                    required
                                >
                                    {genres.map((g) => {
                                        return <option key={g.id} value={g.id}>{g.name}</option>
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='rulesGenreText'>
                            (Hold CTRL key to select multiple genres and platforms)
                        </div>
                        <div>
                            <button type='submit' className='botSubmit'>
                                <span>ADD GAME</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
