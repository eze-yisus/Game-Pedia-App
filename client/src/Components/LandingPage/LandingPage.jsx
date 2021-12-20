import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { getAllGames } from "../../Redux/Actions/index"
import './LandingPage.css';

export default function LandingPage() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGames())
    }, [dispatch]);

    return (
        <div className='background_page'>
            <div>
                {/* <div className='name'>¿ READY ?</div> */}
            </div>
            <div>
                <Link to='/videogames'>
                    <button className='button'>COIN</button>
                </Link>
            </div>
        </div>
    )
}