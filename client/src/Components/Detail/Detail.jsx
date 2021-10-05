import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGameById } from "../../Redux/Actions/index.js";

export default function Detail(props) {

    const { idGame } = props.match.params

    const gameDetail = useSelector((state) => state.videogame)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameById(idGame))
    }, [dispatch, idGame]);


    const renso = false;

    return (
        <div>
            <Link to='/videogames'>
                <button>Go Back!</button>
            </Link>
            {
                gameDetail?.name ?
                    <>
                        <div>
                            <div><h1>{gameDetail.name}</h1></div>
                            <div><img src={gameDetail.image} alt='imagen del videojuego' width='350px' height='220px' /></div>
                            <div><h4>Released Data: {gameDetail.released}</h4></div>
                            <div><p>Description: {gameDetail.description.replace(/(<([^>]+)>)/ig, '')}</p></div>
                            <div><h4>Rating: {gameDetail.rating}</h4></div>
                            <div><h4>Genres: {gameDetail.genres.join(' - ')}</h4></div>
                            <div><h4>Platforms: {gameDetail.platforms.join(' - ')}</h4></div>
                        </div>
                    </>
                    :
                    <div>LOADING . . .</div>
            }
        </div>
    )
}