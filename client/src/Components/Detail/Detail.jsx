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

    // --- MOSTRAR / ESCONDER description ---

    const [readMore, setReadMore] = useState(false);

    const setInnerHtml = (description) => {
        if (readMore === true) {
            return {
                __html: description
            };
        }
    };

    const linkName = readMore ? "Hide description >>" : "See description >>";

    const handleOnClick = () => {
        setReadMore(!readMore);
    };

    // --- MOSTRAR / ESCONDER description ---

    return (
        <div className='fondiu'>
            <Link to='/videogames'>
                <button className='goBack'>Go Back!</button>
            </Link>
            {
                gameDetail?.name ?
                    <>
                        <div className='detail'>
                            <div className='titleDetails'><h1>{gameDetail.name}</h1></div>
                            <div className='imgDetails'><img src={gameDetail.image} alt='imagen del videojuego' width='350px' height='220px' /></div>
                            <div>
                                <button className='showDescr' onClick={handleOnClick}>
                                    <p>{linkName}</p>
                                </button>
                            </div>
                            <div className='aboDetails'>
                                <div className='pDetails'>
                                    <div className='pDetailsTitle' dangerouslySetInnerHTML={setInnerHtml("Description:")}>
                                    </div>
                                    <div dangerouslySetInnerHTML={setInnerHtml(gameDetail.description)}>
                                    </div>
                                </div>
                            </div>
                            <div className='relDetails'><h4>Released Data</h4>{gameDetail.released}</div>
                            <div className='ratDetails'><h4>Rating</h4>{gameDetail.rating}</div>
                            <div className='genDetails'><h4>Genres</h4>{gameDetail.genres.join(' - ')}</div>
                            <div className='platDetails'><h4>Platforms</h4>{gameDetail.platforms.join(' - ')}</div>
                        </div>
                    </>
                    :
                    <div>LOADING . . .</div>
            }
        </div>
    )
}