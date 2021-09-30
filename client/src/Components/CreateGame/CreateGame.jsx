import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { getGenres } from "../../Redux/Actions/index.js";

const platforms = require("../../Utils/Platforms.json");

export default function CreateGame() {

    const dispatch = useDispatch();
    const genres = useSelector((state) => state.genres);
    const [input, setInput] = useState({
        name: '',
        description: '',
        released: '',
        rating: '',
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(getGenres())
    }, [dispatch]);

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        // console.log(input)
    }

    const handleSelect = (e) => {
        setInput({
            ...input,
            genres: [...input.genres, e.target.value]
        })
    }

    const handleSelectPlat = (e) => {
        setInput({
            ...input,
            platforms: [...input.platforms, e.target.value]
        })
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault(e);
            console.log(input);
            var postGame = await axios.post('http://localhost:3001/videogame/add', input);
            setInput({
                name: '',
                description: '',
                released: '',
                rating: '',
                genres: [],
                platforms: [],
            })
            alert('Videojogo creado con rotundo éxito')
        } catch (error) {
            alert('Error: videojogo no creado... ' + error)
        }
    }

    return (
        <div>
            <Link to='/home'>
                <button>Go home!</button>
            </Link>
            <div>
                <h1>Crea tu propio videojogo!</h1>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <input placeholder='Nombre del jogo'
                            autoComplete='off'
                            type='text'
                            name='name'
                            required='required'
                            value={input.name}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <input placeholder='Descripción del jogo'
                            autoComplete='off'
                            type='text'
                            name='description'
                            required='required'
                            value={input.description}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <input placeholder='Fecha de la creación del jogo'
                            autoComplete='off'
                            type='text'
                            name='released'
                            required='required'
                            value={input.released}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <input placeholder='Raing del jogo (1 - 10)'
                            autoComplete='off'
                            min='1' max='10'
                            type='number'
                            name='rating'
                            required='required'
                            value={input.rating}
                            onChange={(e) => handleChange(e)}
                        />
                    </div>
                    <div>
                        <select onChange={(e) => handleSelect(e)} required='required'>
                            <option>Genres</option>
                            {
                                genres.map((g) => (
                                    <option value={g.id}>{g.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div>
                        <select onChange={(e) => handleSelectPlat(e)} required='required'>
                            <option>Platforms</option>
                            {
                                platforms.map((p) => (
                                    <option value={p.name}>{p.name}</option>
                                ))
                            }
                        </select>
                    </div>
                    <button type='submit'>Crear!</button>
                </form>
            </div>
        </div>
    );
}
