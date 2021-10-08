import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGenres, createGame } from "../../Redux/Actions/index.js";
import { useHistory } from "react-router";

export default function CreateGame() {

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

    const handleGenres = (e) => {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value],
        });
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
        <div>
            <Link to='/videogames'>
                <button>Go videogames!</button>
            </Link>
            <div>
                <h3>Add your own game</h3>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name</label>
                        <input
                            placeholder='Name of the game . . .'
                            type='text'
                            name='name'
                            onChange={handleChange}
                            value={input.name}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <label>Description</label>
                        <textarea
                            placeholder='Description of the game . . .'
                            name='description'
                            onChange={handleChange}
                            value={input.description}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <label>Released</label>
                        <input
                            type='date'
                            name='released'
                            onChange={handleChange}
                            value={input.released}
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <label>Image</label>
                        <input
                            placeholder='Add an image URL for your game . . .'
                            type='text'
                            name='image'
                            onChange={handleChange}
                            value={input.image}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <label>Rating</label>
                        <input
                            placeholder='Rate your game (1-10) . . .'
                            type='number'
                            min='0'
                            max='10'
                            name='rating'
                            onChange={handleChange}
                            value={input.rating}
                            autoComplete='off'
                        />
                    </div>
                    <div>
                        <label>Platforms</label>
                        <input
                            placeholder='Select the platforms of your game . . .'
                            type='text'
                            name='platforms'
                            onChange={handleChange}
                            value={input.platforms}
                            autoComplete='off'
                            required
                        />
                    </div>
                    <div>
                        <label>Genres</label>
                        <div>
                            <select
                                name='genres'
                                multiple='multiple'
                                onChange={handleGenres}
                                required
                            >
                                {genres.map((g) => {
                                    return <option key={g.id} value={g.id}>{g.name}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div>
                        Hold CTRL key to select multiple genres
                    </div>
                    <div>
                        <button type='submit'>
                            <span>SUBMIT</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
