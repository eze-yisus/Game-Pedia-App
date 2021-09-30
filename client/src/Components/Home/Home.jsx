import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames, getGenres } from "../../Redux/Actions";
import SearchBar from "../SearchBar/SearchBar";
import CardGame from "../CardGame/CardGame";
import './Home.css';


export default function Home() {


    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.videogames);

    // const genres = useSelector((state) => state.genres);

    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getAllGames())
    };

    return (
        <div className='back_image'>
            <Link to='/videogame/add'><button className='create'>C r e a r  -  v i d e o j o g o !</button></Link>
            <Link to='/'><button className='toHome'>Inicio</button></Link>
            <div className='titulaso'>
                <label>Videojoogoos!!!</label>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <button onClick={(e) => handleClick(e)} >Mostrar los joooogos!</button>
            <nav>
                <br />
                <br />
                <br />
                <br />
                <SearchBar />
                {allGames.map((a) => {
                    return (
                        <div>
                            <Link to={'/home'}>
                                <CardGame
                                    id={a.id}
                                    image={a.image}
                                    name={a.name}
                                    genres={a.genres}

                                    key={a.id}
                                />
                            </Link>
                        </div>
                    )
                })}
            </nav>
            <div>
            </div>
        </div>
    )
}