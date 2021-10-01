import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames, getGenres } from "../../Redux/Actions";
import SearchBar from "../SearchBar/SearchBar";
import CardGame from "../CardGame/CardGame";
import Pagination from "../Pagination/Pagination";
import './Home.css';


export default function Home() {


    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.videogames);

    // const genres = useSelector((state) => state.genres);

    const [currentPage, setCurrentPage] = useState(1);
    const [gameXpage, setGameXpage] = useState(15);
    const indexLastGamePage = currentPage * gameXpage;
    const indexFirstGamePage = indexLastGamePage - gameXpage;
    const currentGame = allGames.slice(indexFirstGamePage, indexLastGamePage);

    const paginado = (numPage) => {
        setCurrentPage(numPage)
    };

    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getAllGames())
    };

    const handleClickPrev = (e) => {
        e.preventDefault();
    }


    // const prev = (e) => {
    //     e.preventDefault();
    //     if (pages <= 0) {
    //         setPages(0);
    //     } else {
    //         setPages(pages - 10)
    //     }
    // };

    // const next = (e) => {
    //     e.preventDefault();
    //     if (allCountries.length < 10) {
    //         return;
    //     } else {
    //         setPages(pages + 10);
    //     }
    // };


    return (
        <div className='back_image'>
            <Link to='/videogame/add'><button className='create'>C r e a r  -  v i d e o j o g o !</button></Link>
            <Link to='/'><button className='toHome'>Inicio</button></Link>
            <div className='titulaso'>
                <label>Videojoogoos!!!</label>
            </div>
            <br />
            <br />
            <br />
            <button onClick={(e) => handleClick(e)} >Mostrar los joooogos!</button>
            <nav>
                <br />
                <br />
                <br />
                <br />
                <SearchBar />
                <Pagination
                    gameXpage={gameXpage}
                    allGames={allGames.length}
                    paginado={paginado}
                />
                {currentGame?.map((a) => {
                    return (
                        <div key={a.id}>
                            <Link to={'/home'}>
                                <CardGame
                                    id={a.id}
                                    image={a.image}
                                    name={a.name}
                                    genres={a.genres}

                                    
                                />
                            </Link>
                        </div>
                    )
                })}
            </nav>
            <div>
                <footer>
                    <button>Prev</button>
                    <button>Next</button>
                </footer>
            </div>
        </div>
    )
}