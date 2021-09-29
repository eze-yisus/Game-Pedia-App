import React from "react";
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div>
            <Link to='/home'>
                <button>Entrar</button>
            </Link>
            <h2>Soy la LandingPage, loco!</h2>
        </div>
    )
}