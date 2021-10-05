import React from "react";
import './CardGame.css';

export default function CardGame({ id, image, name, genres }) {
    return (
        <div className='contenedorcartones'>
            <div>
                <h3 className='nombre'>{name}</h3>
                <h4 className='genero'>{genres.join(' - ')}</h4>
                <img className='foto' src={image} alt='imagen del videojuego' width='250px' height='140px' />
            </div>
        </div>
    );
}