import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames, getGenres } from "../../Redux/Actions";
import SearchBar from "../SearchBar/SearchBar";
import CardGame from "../CardGame/CardGame";


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
        <div>
            <Link to='/'>Inicio</Link>
            <h1>Videojoooogooos!!!</h1>
            <button onClick={(e) => handleClick(e)} >Mostrar los joooogos!</button>
            <nav>
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