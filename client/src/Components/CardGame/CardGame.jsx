import React from "react";
import './CardGame.css';

export default function CardGame({ id, image, name, genres }) {
    return (
        <div className='cartones'>
            <div>
                <div>
                    <img className='foto' src={image} alt='imagen del videojuego' width='250px' height='140px' />
                </div>
                <div>
                    <div className='nombre'>
                        <p>{name}</p>
                    </div>
                    <div className='genero'>
                        <p>{genres.join(' - ')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}