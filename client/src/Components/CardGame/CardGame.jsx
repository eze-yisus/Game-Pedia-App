import React from "react";
import { Link } from "react-router-dom";

export default function CardGame({ id, image, name, genres, rating, released }) {
    return (
        <div>
            <Link to={`/videogame/${id}`}>
                <ul>
                    <h3>{name}</h3>
                    {genres.map(g => (<h4>{g.name}</h4>))}
                    <img src={image} alt='imagen del videojuego' width='250px' height='140px' key={id}/>
                </ul>
            </Link>
        </div>
    );
}