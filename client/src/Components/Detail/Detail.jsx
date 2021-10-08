import React, { useEffect } from "react";
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
                <button className='goBack'>Go Back</button>
            </Link>
            {
                gameDetail?.name ?
                    <>
                        <div className='detail'>
                            <div className='titleDetails'>
                                <h1>{gameDetail.name}</h1>
                            </div>
                            <div className='imgDetails'>
                                <img src={gameDetail.image} alt='imagen del videojuego' width='350px' height='220px' />
                            </div>
                            <div className='aboDetails'>
                                <div className='pDetails'>
                                    <h4 className='pDetailsTitle'>Description</h4>
                                    {gameDetail.description.replace(/(<([^>]+)>)/ig, '')}
                                </div>
                            </div>
                            <div className='relDetails'>
                                <h4 className='relDetailsTitle'>Released Data</h4>
                                {gameDetail.released}
                            </div>
                            <div className='ratDetails'>
                                <h4 className='ratDetailsTitle'>Rating</h4>
                                {gameDetail.rating}
                            </div>
                            <div className='genDetails'>
                                <h4 className='genDetailsTitle'>Genres</h4>
                                {typeof gameDetail.id !== 'number' && gameDetail.genres
                                    ? gameDetail.genres.map(g => g.name).join(' - ')
                                    : gameDetail.genres && gameDetail.genres.length > 0
                                        ? gameDetail.genres.join(' - ')
                                        : null
                                }
                            </div>
                            <div className='platDetails'>
                                <h4 className='platDetailsTitle'>Platforms</h4>
                                {gameDetail.platforms + ''}
                            </div>
                        </div>
                    </>
                    :
                    <div>LOADING . . .</div>
            }
        </div>
    )
}