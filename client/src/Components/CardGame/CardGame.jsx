import React from "react";
import { Link } from "react-router-dom";

export default function CardGame({ id, image, name, genres, rating, released }) {
    return (
        <div>
            <Link to={`/videogame/${id}`}>
                <ul>
                    <h2>{name}</h2>
                    {genres.map(g => (<h4>{g.name}</h4>))}
                    <img src={image} alt='imagen del videojuego' width='200px' height='200px' />
                </ul>
            </Link>
        </div>
    );
}