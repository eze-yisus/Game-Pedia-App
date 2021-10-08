import React from "react";
import './CardGame.css';

export default function CardGame({ image, name, genres, rating }) {

    let genresArray = genres;

    genresArray = Object.keys(genresArray).map((name) => {
        return genresArray[name] + ' ';
    })

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
                        <p>{genres.name}</p>
                    </div>
                    <div className='rating'>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}