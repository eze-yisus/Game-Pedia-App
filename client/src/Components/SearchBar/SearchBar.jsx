import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../Redux/Actions/index.js';

export default function SearchBar() {

    const dispatch = useDispatch();
    const [game, setGame] = useState('');

    const handleInputChange = (event) => {
        event.preventDefault();
        setGame(event.target.value);
    };

    const handleClick = (event) => {
        event.preventDefault();
        dispatch(getGameByName(game));
    };


    return (
        <div>
            <input type='text' placeholder='Buscar. . . ' onChange={(e) => handleInputChange(e)} />
            <button onClick={(e) => handleClick(e)}>Buscar</button>
        </div>
    );
}