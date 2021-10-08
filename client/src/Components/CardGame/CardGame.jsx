import React from "react";
import './CardGame.css';

export default function CardGame({ id, image, name, genres, rating }) {

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
                        <p>
                            {typeof id !== 'number' && genres
                                ? genres.map(g => g.name).join(' - ')
                                : genres && genres.length > 0
                                ? genres.join(' - ')
                                : null
                            }
                        </p>
                    </div>
                    <div className='rating'>
                        <p>Rating: {rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}