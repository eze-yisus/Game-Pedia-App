import React from "react";
import { Link } from 'react-router-dom';
import './LandingPage.css';

export default function LandingPage() {
    return (
        <div className='background_page'>
            <div>
                <div className='name'>¿ READY ?</div>
            </div>
            <div>
                <Link to='/videogames'>
                    <button className='button'>GO ON!</button>
                </Link>
            </div>
        </div>
    )
}