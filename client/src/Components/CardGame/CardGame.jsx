import React from "react";
import { Link } from "react-router-dom";

export default function CardGame({ id, image, name, genres, rating, released }) {
    return (
        <div>
            <Link to={`/videogame/${id}`}>
                <ul>
                    <h3>{name}</h3>
                    <h4>{genres}</h4>
                    {/* {genres.map(g => (<div key={g.id}><h4>{g.name}</h4></div>))} */}
                    <img src={image} alt='imagen del videojuego' width='250px' height='140px'/>
                </ul>
            </Link>
        </div>
    );
}