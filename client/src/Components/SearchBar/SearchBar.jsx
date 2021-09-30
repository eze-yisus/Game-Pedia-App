import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { getGameByName } from '../../Redux/Actions/index.js';
import './SearchBar.css';

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
        <div className='fondo'>
            <div className='texto'>
                <h4>Buscas un jogo?</h4>
            </div>
            <input className='input' type='text' placeholder=' Escríbalo usté . . . ' value={game} onChange={(e) => handleInputChange(e)} />
            <button className='search' type='submit' onClick={(e) => handleClick(e)}>Buscar</button>
        </div>
    );
}