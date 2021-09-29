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




    return (
        <div>
            <Link to='/home'>
                <button>Go Back!</button>
            </Link>
            {
                gameDetail?.name ?
                    <>
                        <h1>{gameDetail.name}</h1>
                        <img src={gameDetail.image} alt='imagen del videojuego' width='350px' height='220px' />
                        <h4>Released Data: {gameDetail.released}</h4>
                        <p>Description: {gameDetail.description.replace(/(<([^>]+)>)/ig, '')}</p>
                        <h4>Rating: {gameDetail.rating}</h4>
                        <h4>Genres: {gameDetail.genres}</h4>
                        <h4>Platforms: {gameDetail.platforms}</h4>
                    </>
                    :
                    <div>LOADING . . .</div>
            }
        </div>
    );
}