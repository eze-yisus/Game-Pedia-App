import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllGames, getGenres } from "../../Redux/Actions";
import SearchBar from "../SearchBar/SearchBar";
import CardGame from "../CardGame/CardGame";
import './Home.css';


export default function Home() {

    const dispatch = useDispatch();

    const allGames = useSelector((state) => state.videogames);

    // const genres = useSelector((state) => state.genres);

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(12);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allGames.slice(indexOfFirstPost, indexOfLastPost);

    const nextPage = () => {
        if (currentPage !== 7) setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1);
    };

    useEffect(() => {
        dispatch(getAllGames())
        dispatch(getGenres())
    }, [dispatch]);

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getAllGames())
    };

    return (
        <div className='back_image'>
            <Link to='/videogame/add'><button className='create'>Add your video game!</button></Link>
            <Link to='/'><button className='toHome'>HOME</button></Link>
            <div className='titulaso'>
                <label>VIDEOGAMES!!!</label>
            </div>
            <br />
            <br />
            <br />
            <button onClick={(e) => handleClick(e)} >Show games!</button>
            <SearchBar />
            <br />
            <br />
            <div className='contenedor'>
                {currentPosts && currentPosts?.map((a) => {
                    return (
                        <div key={a.id}>
                            <Link to={`/videogame/${a.id}`}>
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
            </div>
            <footer>
                <button onClick={() => prevPage()}>{'<'}</button>
                <button onClick={() => nextPage()}>{'>'}</button>
            </footer>
        </div>
    )
}