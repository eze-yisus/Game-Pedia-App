import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getGameById } from "../../Redux/Actions/index.js";
import './Detail.css';

export default function Detail(props) {

    const { idGame } = props.match.params

    const gameDetail = useSelector((state) => state.videogame)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGameById(idGame))
    }, [dispatch, idGame]);


    return (
        <div className='fondiu'>
            <Link to='/videogames'>
                <button>Go Back!</button>
            </Link>
            {
                gameDetail?.name ?
                    <>
                        <div className='detail'>
                            <div className='titleDetails'><h1>{gameDetail.name}</h1></div>
                            <div className='imgDetails'><img src={gameDetail.image} alt='imagen del videojuego' width='350px' height='220px' /></div>
                            <div className='aboDetails'><p className='pDetails'>Description: {gameDetail.description.replace(/(<([^>]+)>)/ig, '')}</p></div>
                            <div className='relDetails'><h4>° Released Data: {gameDetail.released}</h4></div>
                            <div className='ratDetails'><h4>° Rating: {gameDetail.rating}</h4></div>
                            <div className='genDetails'><h4>° Genres: {gameDetail.genres.join(' - ')}</h4></div>
                            <div><h4>Platforms: {gameDetail.platforms.join(' - ')}</h4></div>
                        </div>
                    </>
                    :
                    <div>LOADING . . .</div>
            }
        </div>
    )
}